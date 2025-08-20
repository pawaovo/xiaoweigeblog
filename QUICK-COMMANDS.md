# ⚡ 博客写作快速命令参考

## 🚀 启动环境
```bash
start-hugo.bat                    # 启动本地服务器
```
访问：http://localhost:1313

## ✍️ 创建内容
```bash
./new-post.sh "文章标题"           # 创建新文章（推荐）
.\.tools\hugo\hugo.exe new posts/article.md    # 创建文章
.\.tools\hugo\hugo.exe new cards/concept.md    # 创建知识卡片
```

## 📝 写作流程
```bash
# 1. 启动环境
start-hugo.bat

# 2. 创建文章
./new-post.sh "今天的想法"

# 3. 编辑文章（自动保存，自动刷新）

# 4. 发布
git add .
git commit -m "添加新文章"
git push
```

## 🔧 常用操作
```bash
# 预览草稿
.\.tools\hugo\hugo.exe server --buildDrafts

# 构建 CSS
npm run build:uno:prod

# 查看状态
git status

# 停止服务器
Ctrl+C
```

## 📁 重要目录
- `content/posts/` - 文章存放
- `content/cards/` - 知识卡片
- `static/img/` - 图片资源
- `config/_default/` - 配置文件

## 🆘 故障排除
```bash
# 端口被占用，换端口
.\.tools\hugo\hugo.exe server --port 3000

# 重新构建
npm install
npm run build:uno:prod
```

---
💡 **提示**：保存文件后浏览器会自动刷新显示最新内容！
