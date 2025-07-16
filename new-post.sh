#!/bin/bash

# 快速创建新文章的脚本

if [ $# -eq 0 ]; then
    echo "用法: ./new-post.sh <文章标题>"
    echo "示例: ./new-post.sh \"我的第一篇博客\""
    exit 1
fi

TITLE="$1"
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-zA-Z0-9\u4e00-\u9fa5]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')

echo "📝 创建新文章: $TITLE"
echo "📁 文件名: $FILENAME.md"

# 创建文章
hugo new "posts/$FILENAME.md"

echo "✅ 文章创建成功！"
echo "📝 开始编辑: content/posts/$FILENAME.md"

# 如果有 code 命令（VS Code），自动打开文件
if command -v code &> /dev/null; then
    code "content/posts/$FILENAME.md"
fi
