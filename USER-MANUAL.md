# 📖 xiaoweige 博客使用手册

## 🎯 快速概览

您的博客已完全搭建完成，包含以下内容：

### 📄 当前页面
- **首页**：展示最新文章和知识卡片
- **文章页面**：3 篇示例文章（欢迎文章、Markdown 指南、功能介绍）
- **知识卡片**：3 个概念卡片（Hugo、静态网站生成器、Markdown）
- **关于页面**：个人介绍和联系方式
- **分类/标签页面**：内容分类浏览

### 🌐 访问地址
- **博客地址**：https://pawaovo.github.io/xiaoweige-blog/
- **本地预览**：http://localhost:1313

## ✍️ 日常写作

### 创建新文章
```bash
# 方法1：使用快速脚本（推荐）
./new-post.sh "我的新文章标题"

# 方法2：使用 Hugo 命令
hugo new posts/my-new-article.md
```

### 创建知识卡片
```bash
hugo new cards/new-concept.md
```

### 本地预览
```bash
hugo serve
# 然后访问 http://localhost:1313
```

## 📝 内容编辑

### 文章格式
每篇文章都以 Front Matter 开头：
```yaml
---
title: "文章标题"
date: 2025-07-16T10:00:00+08:00
tags: ["标签1", "标签2"]
categories: ["分类名"]
draft: false  # false=发布，true=草稿
---

这里写文章内容...
```

### 支持的功能
- **Markdown 语法**：标题、列表、链接、图片等
- **代码高亮**：支持多种编程语言
- **数学公式**：LaTeX 语法
- **表格**：Markdown 表格
- **引用块**：> 引用内容

## 🚀 发布流程

### 1. 编辑内容
- 创建或编辑文章
- 本地预览确认效果

### 2. 提交发布
```bash
git add .
git commit -m "添加新文章：文章标题"
git push origin main
```

### 3. 自动部署
- GitHub Actions 自动构建（2-5分钟）
- 部署完成后自动更新网站

## 🔍 博客功能

### 搜索功能
- **快捷键**：⌘+K (Mac) 或 Ctrl+K (Windows)
- **搜索范围**：文章标题、内容、标签
- **即时搜索**：输入即显示结果

### 响应式设计
- **桌面端**：完整功能和布局
- **平板端**：适配中等屏幕
- **手机端**：优化的移动体验

### 多语言支持
- **中文**：主要语言
- **英文**：可选版本
- **切换**：页面右上角地球图标

## 📁 文件组织

### 内容目录
```
content/
├── posts/          # 博客文章
├── cards/          # 知识卡片
├── about.md        # 关于页面
└── ...            # 其他页面
```

### 静态资源
```
static/
├── img/           # 图片文件
├── css/           # 自定义样式
└── js/            # JavaScript 文件
```

## 🛠️ 常用命令

```bash
# 本地开发
hugo serve                    # 启动本地服务器
hugo serve --drafts          # 包含草稿预览

# 内容创建
./new-post.sh "标题"         # 快速创建文章
hugo new cards/concept.md    # 创建知识卡片

# 构建部署
./deploy.sh                  # 本地构建测试
git add . && git commit -m "更新" && git push  # 发布

# 项目管理
git status                   # 查看文件状态
git log --oneline           # 查看提交历史
```

## 🎨 自定义选项

### 修改个人信息
编辑 `config/_default/params.yaml`：
```yaml
author: xiaoweige  # 修改作者名
```

### 修改网站标题
编辑 `config/_default/languages.yaml`：
```yaml
zh:
  title: xiaoweige  # 修改网站标题
```

### 更新联系方式
编辑 `content/about.md` 中的联系信息

### 添加社交链接
编辑 `config/_default/params.yaml` 中的 `footerExternalLinks`

## 📊 内容建议

### 文章类型
- **技术教程**：编程、工具使用
- **学习笔记**：读书心得、课程总结
- **项目分享**：个人项目介绍
- **生活感悟**：日常思考、随笔

### 知识卡片
- **技术概念**：编程术语、技术原理
- **工具介绍**：软件、服务使用说明
- **学习要点**：重要知识点总结

## 🔧 故障排除

### 本地预览问题
```bash
# 重新安装依赖
npm install

# 重新构建 CSS
npm run build:uno:prod

# 重启服务器
hugo serve
```

### 部署失败
1. 检查 GitHub Actions 日志
2. 确认文件格式正确
3. 验证 Front Matter 语法

### 搜索不工作
- 确认已构建 Pagefind 索引
- 检查 JavaScript 是否正常加载

## 📞 获取帮助

### 文档资源
- `PROJECT-DOCUMENTATION.md` - 完整项目文档
- `README.md` - 项目说明
- `QUICK-START.md` - 快速开始指南

### 在线资源
- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [GitHub Pages 文档](https://docs.github.com/pages)

---

🎉 **开始您的博客之旅吧！**

💡 **提示**：建议先熟悉现有的示例内容，然后开始创作您的第一篇正式文章。
