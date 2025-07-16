#!/bin/bash

# Git 仓库初始化和部署准备脚本

echo "🚀 开始设置 Git 仓库..."

# 检查是否已经是 Git 仓库
if [ -d ".git" ]; then
    echo "📁 检测到现有 Git 仓库"
    echo "🔄 移除原有的远程仓库连接..."
    git remote remove origin 2>/dev/null || true
else
    echo "📁 初始化新的 Git 仓库..."
    git init
fi

# 创建 .gitignore 文件
echo "📝 创建 .gitignore 文件..."
cat > .gitignore << 'EOF'
# Hugo
public/
resources/
.hugo_build.lock

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.temp

# Logs
*.log

# Build artifacts
dist/
build/
EOF

# 添加所有文件到 Git
echo "📦 添加文件到 Git..."
git add .

# 创建初始提交
echo "💾 创建初始提交..."
git commit -m "Initial commit: xiaoweige blog setup

- Based on geek-death-project theme
- Configured for xiaoweige
- Ready for deployment"

echo "✅ Git 仓库设置完成！"
echo ""
echo "🔗 下一步：创建 GitHub 仓库"
echo "   1. 访问 https://github.com/new"
echo "   2. 仓库名建议使用: xiaoweige.github.io (用于 GitHub Pages)"
echo "   3. 设置为 Public"
echo "   4. 不要初始化 README、.gitignore 或 LICENSE"
echo ""
echo "📤 创建仓库后，运行以下命令连接远程仓库："
echo "   git remote add origin https://github.com/xiaoweige/xiaoweige.github.io.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "🌐 GitHub Pages 将自动部署到："
echo "   https://xiaoweige.github.io/"
