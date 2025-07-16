# 我的个人博客

基于 Hugo 静态网站生成器搭建的个人博客，使用了 geek-death-project 主题。

## 特色功能

- **极简设计**：专注内容，减少视觉干扰
- **快速加载**：静态网站，访问速度快
- **全站搜索**：支持快捷键搜索（⌘+K 或 Ctrl+K）
- **响应式设计**：在各种设备上都有良好的阅读体验
- **多语言支持**：支持中英文双语
- **评论系统**：基于 GitHub Discussions 的 Giscus 评论

## 本地开发

### 环境要求

- Hugo v0.148.1+ (extended version)
- Node.js 和 npm
- Git

### 安装和运行

1. 克隆仓库：
```bash
git clone <your-repo-url>
cd myblog
```

2. 安装依赖：
```bash
npm install
```

3. 构建 CSS：
```bash
npm run build:uno:prod
```

4. 启动本地服务器：
```bash
hugo serve
```

5. 访问 http://localhost:1313

### 创建新文章

```bash
# 创建新的博客文章
hugo new posts/my-new-post.md

# 创建新的知识卡片
hugo new cards/my-concept.md
```

## 部署

### GitHub Pages

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. GitHub Actions 会自动构建和部署

### Cloudflare Pages

1. 连接 GitHub 仓库到 Cloudflare Pages
2. 设置构建命令：`npm run build:uno:prod && hugo`
3. 设置输出目录：`public`

## 配置

主要配置文件位于 `config/_default/` 目录：

- `config.yaml` - 基础配置
- `params.yaml` - 主题参数
- `languages.yaml` - 多语言配置

## 内容组织

```
content/
├── posts/          # 博客文章
├── cards/          # 知识卡片
├── about.md        # 关于页面
└── ...
```

## 许可证

- 博客源代码：MIT 协议
- 博客内容：CC BY-SA 4.0 协议

## 致谢

基于 [geek-death-project](https://github.com/BigCoke233/geek-death-project) 主题构建。
