import os
import re
import json

content_dir = "content"
internal_link_pattern = re.compile(r"\[[^\]]*\]\((/[^)]+)\)")

url_map = {}       # file path -> canonical url
alias_map = {}     # alias url -> canonical url
link_graph = {}    # canonical url -> list of canonical urls
title_map = {}     # canonical url -> title


def parse_frontmatter(filepath):
    with open(filepath, encoding="utf-8") as f:
        lines = f.readlines()

    if not lines or lines[0].strip() != "---":
        return {}, 0

    frontmatter = {}
    aliases = []
    slug = None
    draft = False
    title = None
    related_cards = []
    mentioned_books = []
    i = 1
    while i < len(lines):
        line = lines[i].strip()
        if line == "---":
            break
        if ":" in line:
            key, value = line.split(":", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")

            if key == "aliases":
                aliases = []
                i += 1
                while i < len(lines) and lines[i].startswith("  - "):
                    alias = lines[i].strip()[3:].strip()
                    aliases.append(alias)
                    i += 1
                continue
            elif key == "slug":
                slug = value
            elif key == "draft":
                draft = value.lower() == "true"
            elif key == "title":
                title = value
            elif key == "related_cards":
                related_cards = []
                i += 1
                while i < len(lines) and lines[i].strip().startswith("- "):
                    related_cards.append(lines[i].strip()[2:].strip())
                    i += 1
                continue
            elif key == "mentioned_books":
                mentioned_books = []
                i += 1
                while i < len(lines) and lines[i].strip().startswith("- "):
                    mentioned_books.append(lines[i].strip()[2:].strip())
                    i += 1
                continue
        i += 1

    return {
        "slug": slug,
        "aliases": aliases,
        "draft": draft,
        "title": title,
        "related_cards": related_cards,
        "mentioned_books": mentioned_books
    }, i + 1


def get_canonical_url(filepath, frontmatter):
    rel_path = os.path.relpath(filepath, content_dir)
    dirname, filename = os.path.split(rel_path)
    name = os.path.splitext(filename)[0]
    slug = frontmatter.get("slug") or name
    parts = dirname.split(os.sep)
    if parts == [""]:
        return f"/{slug}/"
    return f"/{'/'.join(parts)}/{slug}/"


def resolve_url(url):
    return alias_map.get(url, url)


def resolve_url_from_dir(link, subdir):
    """Only search for link in a specific content subdir (like 'cards', 'library')"""
    target_dir = os.path.join(content_dir, subdir)
    for path, canonical in url_map.items():
        if path.startswith(target_dir):
            name = os.path.splitext(os.path.basename(path))[0]
            if name == link:
                return canonical
    return None


def get_icon(url):
    if url.startswith("/cards/"):
        return "📄"
    elif url.startswith("/posts/"):
        return "📜"
    elif url.startswith("/library/"):
        return "📖"
    elif url.startswith("/fictions/"):
        return "🧙‍♀️"
    elif url.startswith("/en/"):
        return "🇬🇧"
    return "📁"


def collect_urls():
    for root, _, files in os.walk(content_dir):
        for file in files:
            if not file.endswith(".md") or file == "_index.md":
                continue
            path = os.path.join(root, file)
            frontmatter, _ = parse_frontmatter(path)
            if frontmatter.get("draft"):
                continue

            canonical_url = get_canonical_url(path, frontmatter)
            url_map[path] = canonical_url
            link_graph[canonical_url] = []
            title = frontmatter.get("title") or canonical_url.strip("/").split("/")[-1]
            title_map[canonical_url] = f"{get_icon(canonical_url)} {title}"

            for alias in frontmatter.get("aliases", []):
                alias_map[alias] = canonical_url


def build_link_graph():
    for path, canonical_url in url_map.items():
        with open(path, encoding="utf-8") as f:
            content = f.read()

        # markdown links
        for match in internal_link_pattern.finditer(content):
            link = match.group(1)
            normalized = resolve_url(link)
            if normalized and normalized in link_graph:
                link_graph[canonical_url].append(normalized)

        frontmatter, _ = parse_frontmatter(path)

        # related_cards → only from cards
        for card in frontmatter.get("related_cards", []):
            target = resolve_url_from_dir(card, "cards")
            if target and target in link_graph:
                link_graph[canonical_url].append(target)

        # mentioned_books → only from library
        for book in frontmatter.get("mentioned_books", []):
            target = resolve_url_from_dir(book, "library")
            if target and target in link_graph:
                link_graph[canonical_url].append(target)


def main():
    collect_urls()
    build_link_graph()

    nodes = [
        {"id": url, "label": title_map[url], "url": url}
        for url in link_graph
    ]

    edges = []
    for source, targets in link_graph.items():
        for target in targets:
            edges.append({"from": source, "to": target})

    graph = {"nodes": nodes, "edges": edges}

    with open("static/link-graph.json", "w", encoding="utf-8") as f:
        json.dump(graph, f, indent=2, ensure_ascii=False)
    print("✅ Link graph generated: link-graph.json")


if __name__ == "__main__":
    main()
