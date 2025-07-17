# 📚 xiaoweige 博客项目完整文档

## 🎯 项目概述

这是一个基于 Hugo 静态网站生成器搭建的个人博客，使用了 geek-death-project 主题，具有极简设计风格和丰富的功能特性。

### 基本信息
- **博客名称**：xiaoweige
- **作者**：xiaoweige
- **技术栈**：Hugo + UnoCSS + GitHub Actions
- **部署地址**：https://blog.xiaoweigezzz.xyz/
- **仓库地址**：https://github.com/pawaovo/xiaoweigeblog

## 📁 项目结构

```
myblog/
├── 📝 内容文件
│   ├── content/
│   │   ├── posts/              # 博客文章
│   │   ├── cards/              # 知识卡片
│   │   ├── about.md            # 关于页面
│   │   ├── featured.md         # 精选页面
│   │   └── ...                 # 其他页面
│   
├── ⚙️ 配置文件
│   ├── config/_default/        # Hugo 配置
│   │   ├── config.yaml         # 基础配置
│   │   ├── params.yaml         # 主题参数
│   │   └── languages.yaml      # 多语言配置
│   
├── 🎨 主题文件
│   ├── layouts/                # 页面模板
│   ├── assets/css/             # 样式文件
│   ├── static/                 # 静态资源
│   └── i18n/                   # 国际化文件
│   
├── 🛠️ 工具脚本
│   ├── deploy.sh               # 部署脚本
│   ├── new-post.sh             # 快速写作脚本
│   ├── setup-git.sh            # Git 设置脚本
│   └── archetypes/             # 内容模板
│   
├── 📖 文档文件
│   ├── README.md               # 项目说明
│   ├── QUICK-START.md          # 快速开始
│   ├── SETUP.md                # 配置指南
│   └── DEPLOYMENT-CHECKLIST.md # 部署清单
│   
└── 🔧 构建文件
    ├── package.json            # Node.js 依赖
    ├── uno.config.js           # UnoCSS 配置
    └── .github/workflows/      # GitHub Actions
```

## 📄 当前页面和内容

### 主要页面

#### 1. 首页 (/)
- 显示最新的博客文章
- 展示知识卡片
- 提供搜索功能入口

#### 2. 文章页面 (/posts/)
**当前包含 3 篇文章：**
- **欢迎来到我的博客** - 博客介绍和使用说明
- **Markdown 语法指南** - 展示支持的 Markdown 功能
- **博客功能介绍** - 详细介绍博客的各种特性

#### 3. 知识卡片 (/cards/)
**当前包含 3 个卡片：**
- **Hugo 静态网站生成器** - Hugo 的介绍和特点
- **静态网站生成器** - SSG 的概念和优势
- **Markdown** - Markdown 语法和应用

#### 4. 关于页面 (/about/)
- 个人介绍
- 博客导读
- 技术信息
- 联系方式

#### 5. 分类和标签页面
- **/categories/** - 文章分类浏览
- **/tags/** - 标签云和标签文章

### 功能页面

#### 6. 搜索功能
- 快捷键：⌘+K (Mac) 或 Ctrl+K (Windows/Linux)
- 全站搜索，包括文章标题、内容和标签

#### 7. RSS 订阅 (/rss/)
- 支持 RSS 和 Atom 格式
- 自动更新最新文章

## 🎨 设计特色

### 视觉设计
- **极简主义**：简洁的界面，专注内容
- **响应式设计**：适配桌面、平板、手机
- **优雅排版**：舒适的阅读体验
- **暗色模式**：支持明暗主题切换

### 交互功能
- **快速搜索**：即时搜索结果
- **平滑滚动**：流畅的页面导航
- **代码高亮**：支持多种编程语言
- **数学公式**：支持 LaTeX 语法

## 🛠️ 使用指南

### 日常写作

#### 创建新文章
```bash
# 使用快速脚本
./new-post.sh "文章标题"

# 或使用 Hugo 命令
hugo new posts/article-name.md
```

#### 创建知识卡片
```bash
hugo new cards/concept-name.md
```

#### 本地预览
```bash
hugo serve
# 访问 http://localhost:1313
```

### 内容管理

#### 文章 Front Matter 示例
```yaml
---
title: "文章标题"
date: 2025-07-16T10:00:00+08:00
tags: ["标签1", "标签2"]
categories: ["分类"]
draft: false
---
```

#### 知识卡片 Front Matter 示例
```yaml
---
title: "概念名称"
date: 2025-07-16T10:00:00+08:00
tags: ["概念", "知识"]
---
```

### 发布流程

#### 1. 本地构建测试
```bash
./deploy.sh
```

#### 2. 提交到 GitHub
```bash
git add .
git commit -m "Add new content"
git push origin main
```

#### 3. 自动部署
- GitHub Actions 自动构建
- 约 2-5 分钟后生效
- 访问 https://blog.xiaoweigezzz.xyz/

## 🔧 配置说明

### 基础配置 (config.yaml)
- `baseURL`: 网站地址
- `title`: 网站标题
- `author`: 作者信息

### 主题参数 (params.yaml)
- `footerExternalLinks`: 底部链接
- `extraCSSFiles`: 额外 CSS 文件
- `giscus`: 评论系统配置（可选）

### 多语言配置 (languages.yaml)
- 中文：默认语言
- 英文：可选的英文版本

## 📊 功能特性

### ✅ 已启用功能
- [x] 全站搜索 (Pagefind)
- [x] 语法高亮
- [x] 响应式设计
- [x] 多语言支持
- [x] RSS 订阅
- [x] SEO 优化
- [x] 自动部署

### 🔄 可选功能
- [ ] Giscus 评论系统
- [ ] Google Analytics
- [ ] 自定义域名
- [ ] 热力图统计

## 🚀 扩展建议

### 内容扩展
1. **技术文章**：编程教程、工具使用
2. **读书笔记**：书评和读后感
3. **项目展示**：个人项目介绍
4. **生活随笔**：日常思考和感悟

### 功能增强
1. **评论系统**：启用 Giscus 评论
2. **统计分析**：添加访问统计
3. **社交分享**：添加分享按钮
4. **邮件订阅**：Newsletter 功能

### 视觉优化
1. **自定义主题色**：个性化配色方案
2. **字体优化**：选择合适的字体
3. **图标更新**：替换 favicon 和 logo
4. **动画效果**：添加页面过渡动画

## 📝 维护指南

### 定期维护
- 更新 Hugo 版本
- 更新主题和依赖
- 备份重要内容
- 检查链接有效性

### 性能优化
- 压缩图片资源
- 优化 CSS 和 JS
- 使用 CDN 加速
- 监控加载速度

---

📧 **联系方式**：xiaoweige@example.com  
🔗 **GitHub**：https://github.com/pawaovo/xiaoweigeblog
🌐 **博客地址**：https://blog.xiaoweigezzz.xyz/

*最后更新：2025-07-16*
