# 📝 博客写作完整指南

## 🚀 快速开始

### 启动本地环境
```bash
# 方法1：使用批处理文件（推荐）
start-hugo.bat

# 方法2：直接运行 Hugo
.\.tools\hugo\hugo.exe server

# 方法3：指定端口和地址
.\.tools\hugo\hugo.exe server --port 3000 --bind 127.0.0.1
```

访问地址：http://localhost:1313

### 停止本地服务器
- 在终端中按 `Ctrl+C`
- 或直接关闭命令行窗口

## ✍️ 创建内容

### 创建新文章
```bash
# 方法1：使用快速脚本（推荐）
./new-post.sh "文章标题"

# 方法2：使用 Hugo 命令
.\.tools\hugo\hugo.exe new posts/article-name.md

# 方法3：创建草稿
.\.tools\hugo\hugo.exe new posts/draft-article.md
# 然后在文件中设置 draft: true
```

### 创建知识卡片
```bash
.\.tools\hugo\hugo.exe new cards/concept-name.md
```

### 创建其他页面
```bash
# 创建关于页面
.\.tools\hugo\hugo.exe new about.md

# 创建自定义页面
.\.tools\hugo\hugo.exe new custom-page.md
```

## 📄 文章格式

### 标准文章模板
```yaml
---
title: "文章标题"
date: 2025-08-11T10:00:00+08:00
tags: ["标签1", "标签2", "标签3"]
categories: ["分类名"]
draft: false  # false=发布，true=草稿
description: "文章简介（可选）"
---

这里写文章内容...

## 二级标题

### 三级标题

- 列表项1
- 列表项2

**粗体文本** 和 *斜体文本*

[链接文本](https://example.com)

```代码块```
```

### 知识卡片模板
```yaml
---
title: "概念名称"
date: 2025-08-11T10:00:00+08:00
tags: ["概念", "知识"]
categories: ["知识库"]
draft: false
---

简短的概念解释...
```

## 🔄 写作工作流程

### 日常写作流程
```bash
# 1. 启动本地环境
start-hugo.bat

# 2. 创建新文章
./new-post.sh "今天的想法"

# 3. 编辑文章
# 使用您喜欢的编辑器打开 content/posts/xxx.md

# 4. 实时预览
# 保存文件后，浏览器会自动刷新

# 5. 发布到线上
git add .
git commit -m "添加新文章：今天的想法"
git push origin main
```

### 草稿工作流程
```bash
# 1. 创建草稿
.\.tools\hugo\hugo.exe new posts/draft-article.md

# 2. 在文件中设置
# draft: true

# 3. 预览草稿
.\.tools\hugo\hugo.exe server --buildDrafts

# 4. 完成后发布
# 将 draft: false 或删除 draft 行
```

## 🛠️ 常用命令

### Hugo 基础命令
```bash
# 查看版本
.\.tools\hugo\hugo.exe version

# 构建网站
.\.tools\hugo\hugo.exe

# 启动开发服务器
.\.tools\hugo\hugo.exe server

# 包含草稿的预览
.\.tools\hugo\hugo.exe server --buildDrafts

# 包含未来日期的文章
.\.tools\hugo\hugo.exe server --buildFuture

# 详细日志
.\.tools\hugo\hugo.exe server --logLevel debug

# 清理缓存
.\.tools\hugo\hugo.exe --gc
```

### Git 发布命令
```bash
# 查看状态
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "描述信息"

# 推送到远程仓库
git push origin main

# 查看提交历史
git log --oneline

# 查看远程仓库状态
git remote -v
```

### 内容管理命令
```bash
# 列出所有内容
.\.tools\hugo\hugo.exe list all

# 列出草稿
.\.tools\hugo\hugo.exe list drafts

# 列出未来文章
.\.tools\hugo\hugo.exe list future

# 查看网站配置
.\.tools\hugo\hugo.exe config
```

## 🎨 样式和资源

### UnoCSS 相关
```bash
# 构建生产环境 CSS
npm run build:uno:prod

# 开发环境监听 CSS 变化
npm run build:uno

# 重新安装依赖
npm install
```

### 静态资源
```bash
# 图片放置位置
static/img/

# 自定义 CSS
static/css/

# JavaScript 文件
static/js/
```

## 📁 文件结构

### 内容目录
```
content/
├── posts/          # 博客文章
│   ├── welcome.md
│   └── ...
├── cards/          # 知识卡片
│   ├── hugo.md
│   └── ...
├── about.md        # 关于页面
└── featured.md     # 精选页面
```

### 配置目录
```
config/_default/
├── config.yaml     # 基础配置
├── params.yaml     # 主题参数
└── languages.yaml  # 多语言配置
```

## 🔧 故障排除

### 常见问题解决
```bash
# 服务器启动失败
# 检查端口是否被占用
netstat -an | findstr :1313

# 使用其他端口
.\.tools\hugo\hugo.exe server --port 3000

# 清理并重新构建
.\.tools\hugo\hugo.exe --gc
npm run build:uno:prod

# 重启服务器
# 按 Ctrl+C 停止，然后重新运行 start-hugo.bat
```

### 构建错误排查
```bash
# 详细错误信息
.\.tools\hugo\hugo.exe --logLevel debug

# 检查配置文件
.\.tools\hugo\hugo.exe config

# 验证内容文件
# 检查 Front Matter 语法是否正确
```

## 📊 性能优化

### 构建优化
```bash
# 启用压缩
.\.tools\hugo\hugo.exe --minify

# 清理未使用的文件
.\.tools\hugo\hugo.exe --gc

# 生产环境构建
.\.tools\hugo\hugo.exe --environment production
```

## 🌐 发布部署

### 自动部署
```bash
# 推送到 GitHub 触发自动部署
git push origin main

# 查看部署状态
# 访问 GitHub Actions 页面
```

### 手动部署测试
```bash
# 本地构建测试
./deploy.sh

# 或手动执行
npm run build:uno:prod
.\.tools\hugo\hugo.exe --minify
```

## 💡 写作技巧

### 文章组织
- 使用清晰的标题层级
- 合理使用标签和分类
- 添加文章描述提升 SEO
- 使用代码块展示代码

### 内容规划
- 技术文章：教程、工具使用、问题解决
- 学习笔记：读书心得、课程总结
- 项目分享：个人项目介绍、开发经验
- 生活感悟：日常思考、随笔

### 知识卡片使用
- 重要概念整理
- 技术术语解释
- 工具使用要点
- 学习要点总结

---

📧 **需要帮助？**
- 查看 `PROJECT-DOCUMENTATION.md` 了解项目详情
- 查看 `USER-MANUAL.md` 了解使用说明
- 访问 [Hugo 官方文档](https://gohugo.io/documentation/)

🎉 **开始您的写作之旅吧！**
