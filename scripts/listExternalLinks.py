import os
from urllib.parse import urlparse
from collections import Counter
import json
import re

content_dir = "content"
external_links = Counter()

# 匹配 Markdown 中的 URL 链接 [text](url)
markdown_link_re = re.compile(r'\[.*?\]\((http.*?)\)')

def extract_front_matter_and_content(path):
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    if not lines or lines[0].strip() != '---':
        return {}, ''.join(lines)

    front_matter = {}
    end_index = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_index = i
            break
        key_value = lines[i].split(':', 1)
        if len(key_value) == 2:
            key, value = key_value
            front_matter[key.strip()] = value.strip()

    content = ''.join(lines[end_index+1:]) if end_index else ''.join(lines)
    return front_matter, content

def extract_links_from_file(path):
    _, content = extract_front_matter_and_content(path)

    # 提取 Markdown 格式链接
    for match in markdown_link_re.findall(content):
        domain = urlparse(match).netloc
        if domain:
            external_links[domain] += 1

for root, dirs, files in os.walk(content_dir):
    for file in files:
        if file.endswith(".md"):
            extract_links_from_file(os.path.join(root, file))

# 写入 JSON
os.makedirs("data", exist_ok=True)
with open("data/externallinks.json", "w", encoding="utf-8") as f:
    json.dump(external_links.most_common(), f, indent=2, ensure_ascii=False)

print("✅ External link data written to data/externallinks.json")
