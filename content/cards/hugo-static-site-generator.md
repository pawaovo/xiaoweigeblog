---
title: "Hugo 静态网站生成器"
date: 2025-07-16T10:30:00+08:00
tags: ["技术", "Hugo", "静态网站"]
---

Hugo 是一个用 Go 语言编写的静态网站生成器，以其极快的构建速度而闻名。

## 主要特点

- **极快的构建速度**：通常在几毫秒内完成网站构建
- **零依赖**：单个二进制文件，无需安装其他依赖
- **灵活的内容管理**：支持 Markdown、YAML、TOML 等格式
- **强大的主题系统**：丰富的主题生态系统
- **内置功能**：图片处理、多语言支持、搜索等

## 基本概念

### 内容组织
- `content/` - 存放所有内容文件
- `static/` - 静态资源（图片、CSS、JS等）
- `layouts/` - 模板文件
- `config/` - 配置文件

### Front Matter
每个内容文件开头的元数据，支持 YAML、TOML、JSON 格式：

```yaml
---
title: "文章标题"
date: 2025-07-16
tags: ["标签1", "标签2"]
draft: false
---
```

## 常用命令

```bash
# 创建新站点
hugo new site mysite

# 创建新文章
hugo new posts/my-post.md

# 本地开发服务器
hugo serve

# 构建静态网站
hugo
```

Hugo 是现代静态网站开发的优秀选择，特别适合博客、文档站点和企业网站。


