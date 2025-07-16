#!/bin/bash

# 博客部署脚本
# 用于本地构建和部署博客

set -e

echo "🚀 开始部署博客..."

# 检查是否安装了必要的工具
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo 未安装，请先安装 Hugo"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 Node.js 和 npm"
    exit 1
fi

# 安装依赖
echo "📦 安装 npm 依赖..."
npm install

# 构建 UnoCSS
echo "🎨 构建 UnoCSS..."
npm run build:uno:prod

# 构建 Hugo 站点
echo "🏗️ 构建 Hugo 站点..."
hugo --gc --minify

echo "✅ 构建完成！"
echo "📁 静态文件位于 public/ 目录"
echo ""
echo "🌐 本地预览："
echo "   hugo serve"
echo ""
echo "📤 部署到 GitHub："
echo "   git add ."
echo "   git commit -m \"Update blog\""
echo "   git push origin main"
