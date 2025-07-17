# 博客个性化配置指南

这个文档将指导您完成博客的个性化配置。

**注意**: xiaoweige 博客已经完成基础配置，以下是可选的个性化配置项目。

## ✅ 已完成的基础配置

### 1. 基础信息配置 ✅ 已完成

当前配置 (`config/_default/config.yaml`)：
```yaml
baseURL: https://pawaovo.github.io/xiaoweigeblog/  # ✅ 已配置
```

当前配置 (`config/_default/params.yaml`)：
```yaml
author: xiaoweige  # ✅ 已配置
```

当前配置 (`config/_default/languages.yaml`)：
```yaml
zh:
  title: xiaoweige  # ✅ 已配置
en:
  title: xiaoweige   # ✅ 已配置
```

### 2. 联系方式配置 ✅ 已完成

当前配置 (`content/about.md`)：
- 邮箱地址：xiaoweige@example.com ⚠️ (建议更新为真实邮箱)
- GitHub 链接：https://github.com/pawaovo ✅ 已配置
- 其他社交媒体链接：可根据需要添加

当前配置 (`config/_default/params.yaml`)：
```yaml
footerExternalLinks:
  - name: GitHub
    link: https://github.com/pawaovo/xiaoweige-blog  # ✅ 已配置
    icon: https://image.guhub.cn/uPic/2025/01/NqL5b5.png
```

## 🔧 可选配置项目

### 1. 评论系统 (Giscus)

如果您想启用评论功能：

1. 在您的 GitHub 仓库中启用 Discussions
2. 访问 https://giscus.app/ 获取配置信息
3. 编辑 `config/_default/params.yaml`，取消注释并填写 giscus 配置：

```yaml
giscus:
  repo: yourusername/yourblog
  repoId: YOUR_REPO_ID
  category: General
  categoryId: YOUR_CATEGORY_ID
  mapping: og:title
  strict: 1
  reactionsEnabled: 0
  emitMetadata: 0
  inputPosition: top
  theme: "https://yourdomain.xyz/css/giscus_noborder.css"
```

### 2. 网站图标

替换以下文件：
- `static/favicon.ico`
- `static/apple-touch-icon.png`

### 3. 自定义样式

如果您想自定义样式，可以：
- 修改 `assets/css/` 目录下的 SCSS 文件
- 调整 `uno.config.js` 中的 UnoCSS 配置

## 📝 内容创建

### 创建新文章
```bash
./new-post.sh "文章标题"
# 或者
hugo new posts/article-name.md
```

### 创建知识卡片
```bash
hugo new cards/concept-name.md
```

## 🚀 部署配置

### GitHub Pages 部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为源
4. GitHub Actions 会自动构建和部署

### 自定义域名

如果您有自己的域名：

1. 在域名服务商处添加 CNAME 记录指向 `yourusername.github.io`
2. 在 GitHub 仓库设置中的 Pages 部分添加自定义域名
3. 更新 `config/_default/config.yaml` 中的 `baseURL`

### Cloudflare Pages 部署

1. 连接 GitHub 仓库到 Cloudflare Pages
2. 设置构建命令：`npm run build:uno:prod && hugo`
3. 设置输出目录：`public`
4. 设置环境变量：`HUGO_VERSION=0.148.1`

## 🛠️ 常用命令

```bash
# 本地开发
hugo serve

# 构建生产版本
./deploy.sh

# 创建新文章
./new-post.sh "文章标题"

# 构建 CSS
npm run build:uno:prod

# 安装依赖
npm install
```

## 📚 进阶配置

### 搜索功能

搜索功能已经配置好，使用 Pagefind。如需自定义：
- 编辑 `pagefind.yml` 配置文件
- 修改搜索相关的 JavaScript 代码

### 多语言支持

如果您不需要英文版本：
1. 删除 `content/en/` 目录
2. 修改 `config/_default/languages.yaml`，只保留中文配置

### 自定义页面

您可以创建自定义页面：
```bash
hugo new custom-page.md
```

然后编辑 `content/custom-page.md` 文件。

## ❓ 常见问题

### Q: 如何修改网站标题？
A: 编辑 `config/_default/languages.yaml` 中的 `title` 字段。

### Q: 如何添加新的菜单项？
A: 编辑相应语言的参数文件，添加菜单配置。

### Q: 如何更改主题颜色？
A: 修改 `assets/css/` 目录下的 SCSS 文件或 `uno.config.js` 配置。

### Q: 评论不显示怎么办？
A: 检查 Giscus 配置是否正确，确保仓库已启用 Discussions。

---

配置完成后，记得删除这个 SETUP.md 文件，或者将其移动到其他位置。
