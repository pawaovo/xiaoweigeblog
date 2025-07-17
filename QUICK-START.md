# 🚀 xiaoweige 博客快速启动指南

## 📋 当前状态

✅ **博客已完全配置完成，所有功能可用！**

- 网站标题：xiaoweige
- 作者：xiaoweige
- 本地地址：http://localhost:1313
- 部署地址：https://pawaovo.github.io/xiaoweige-blog/

## 🎯 立即开始

### 1. 本地预览（已可用）
```bash
cd xiaoweige-blog
hugo serve
```
访问：http://localhost:1313

### 2. 创建第一篇文章
```bash
./new-post.sh "我的第一篇正式文章"
```

### 3. 部署到 GitHub Pages

#### ✅ 已完成部署
博客已成功部署到 GitHub Pages：

- **仓库地址**: https://github.com/pawaovo/xiaoweige-blog
- **博客地址**: https://pawaovo.github.io/xiaoweige-blog/
- **部署状态**: 自动部署已配置

如需更新内容，只需：
```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📝 日常使用

### 写作流程
```bash
# 1. 创建新文章
./new-post.sh "文章标题"

# 2. 编辑文章
# 编辑 content/posts/文章文件.md

# 3. 本地预览
hugo serve

# 4. 发布
git add .
git commit -m "Add new post: 文章标题"
git push origin main
```

### 创建知识卡片
```bash
hugo new cards/概念名称.md
```

## 🔧 已配置的功能

### ✅ 核心功能
- [x] 极简主义设计
- [x] 响应式布局
- [x] 快速搜索 (⌘+K / Ctrl+K)
- [x] 语法高亮
- [x] 多语言支持
- [x] RSS 订阅

### ✅ 内容管理
- [x] Markdown 支持
- [x] 文章分类和标签
- [x] 知识卡片系统
- [x] 自动生成目录

### ✅ 部署配置
- [x] GitHub Actions 自动部署
- [x] 静态文件优化
- [x] SEO 友好
- [x] 快速加载

## 📁 项目结构

```
myblog/
├── content/
│   ├── posts/           # 📝 博客文章
│   ├── cards/           # 🃏 知识卡片
│   └── about.md         # ℹ️ 关于页面
├── config/_default/     # ⚙️ 配置文件
├── static/              # 🖼️ 静态资源
├── deploy.sh            # 🚀 部署脚本
├── new-post.sh          # ✍️ 快速写作
└── README.md            # 📖 项目说明
```

## 🎨 自定义选项

### 修改个人信息
编辑 `config/_default/params.yaml`：
```yaml
author: xiaoweige  # 修改为您的真实姓名
```

### 修改网站标题
编辑 `config/_default/languages.yaml`：
```yaml
zh:
  title: xiaoweige  # 修改为您想要的标题
```

### 修改联系方式
编辑 `content/about.md` 中的联系信息

## 🌟 示例内容

博客已包含以下示例内容：

### 文章
- 欢迎来到我的博客
- Markdown 语法指南  
- 博客功能介绍

### 知识卡片
- Hugo 静态网站生成器
- 静态网站生成器
- Markdown

## 🔮 下一步建议

### 立即可做
1. 🚀 **部署到 GitHub Pages**（按上述步骤）
2. ✍️ **写第一篇正式文章**
3. 📧 **更新真实邮箱地址**

### 后续优化
1. 🎨 替换 favicon 和头像
2. 💬 配置 Giscus 评论系统
3. 📊 添加 Google Analytics
4. 🌐 配置自定义域名

## 📞 获取帮助

### 文档资源
- `README.md` - 详细使用说明
- `SETUP.md` - 完整配置指南
- `DEPLOYMENT-CHECKLIST.md` - 部署检查清单

### 常用命令
```bash
hugo serve          # 本地预览
./new-post.sh       # 创建文章
./deploy.sh         # 构建网站
git status          # 检查状态
```

---

🎉 **一切就绪！开始您的博客之旅吧！**

💡 **提示**：删除这些指南文件（QUICK-START.md, SETUP.md, DEPLOYMENT-CHECKLIST.md）或移动到其他位置，保持博客目录整洁。
