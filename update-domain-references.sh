#!/bin/bash

# 批量更新域名引用脚本
# 用于将项目中所有旧域名引用更新为新域名

set -e

echo "🔄 批量更新域名引用工具"
echo ""

# 检查参数
if [ $# -eq 0 ]; then
    echo "使用方法："
    echo "  ./update-domain-references.sh blog.xiaoweigezzz.xyz"
    echo "  ./update-domain-references.sh --restore    # 恢复为 GitHub Pages 域名"
    echo ""
    exit 1
fi

NEW_DOMAIN=$1

# 定义旧域名模式
OLD_GITHUB_DOMAIN="pawaovo.github.io/xiaoweigeblog"
OLD_GITHUB_DOMAIN_ALT="pawaovo.github.io/xiaoweige-blog"

if [ "$NEW_DOMAIN" = "--restore" ]; then
    echo "🔄 恢复为 GitHub Pages 域名..."
    NEW_DOMAIN="pawaovo.github.io/xiaoweigeblog"
    
    # 特殊处理：恢复时需要更新 baseURL
    sed -i.bak "s|baseURL: .*|baseURL: https://$NEW_DOMAIN/|" config/_default/config.yaml
    
    # 删除 CNAME 文件
    if [ -f "static/CNAME" ]; then
        rm static/CNAME
        echo "✅ 已删除 CNAME 文件"
    fi
else
    echo "🔧 更新域名引用：$NEW_DOMAIN"
    
    # 验证域名格式
    if [[ ! $NEW_DOMAIN =~ ^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$ ]]; then
        echo "❌ 域名格式不正确"
        exit 1
    fi
fi

echo "📝 更新文档文件..."

# 更新 README.md
if [ -f "README.md" ]; then
    sed -i.bak "s|https://pawaovo.github.io/xiaoweigeblog/|https://$NEW_DOMAIN/|g" README.md
    sed -i.bak "s|https://pawaovo.github.io/xiaoweige-blog/|https://$NEW_DOMAIN/|g" README.md
    echo "✅ 已更新 README.md"
fi

# 更新 USER-MANUAL.md
if [ -f "USER-MANUAL.md" ]; then
    sed -i.bak "s|https://pawaovo.github.io/xiaoweigeblog/|https://$NEW_DOMAIN/|g" USER-MANUAL.md
    sed -i.bak "s|https://pawaovo.github.io/xiaoweige-blog/|https://$NEW_DOMAIN/|g" USER-MANUAL.md
    sed -i.bak "s|https://www.example.com/|https://$NEW_DOMAIN/|g" USER-MANUAL.md
    echo "✅ 已更新 USER-MANUAL.md"
fi

# 更新 PROJECT-DOCUMENTATION.md
if [ -f "PROJECT-DOCUMENTATION.md" ]; then
    sed -i.bak "s|https://pawaovo.github.io/xiaoweigeblog/|https://$NEW_DOMAIN/|g" PROJECT-DOCUMENTATION.md
    sed -i.bak "s|https://pawaovo.github.io/xiaoweige-blog/|https://$NEW_DOMAIN/|g" PROJECT-DOCUMENTATION.md
    echo "✅ 已更新 PROJECT-DOCUMENTATION.md"
fi

echo "🔧 更新配置文件..."

# 更新 params.yaml 中的 GitHub 链接
if [ -f "config/_default/params.yaml" ]; then
    # 只在恢复模式下更新 GitHub 链接，自定义域名时保持 GitHub 链接不变
    if [ "$1" = "--restore" ]; then
        sed -i.bak "s|https://github.com/pawaovo/xiaoweige-blog|https://github.com/pawaovo/xiaoweigeblog|g" config/_default/params.yaml
    fi
    echo "✅ 已更新 params.yaml"
fi

echo "📄 更新模板文件..."

# 更新 RSS 和元数据模板（如果存在自定义模板）
find layouts -name "*.html" -type f 2>/dev/null | while read file; do
    if grep -q "pawaovo.github.io" "$file" 2>/dev/null; then
        sed -i.bak "s|pawaovo.github.io/xiaoweigeblog|$NEW_DOMAIN|g" "$file"
        sed -i.bak "s|pawaovo.github.io/xiaoweige-blog|$NEW_DOMAIN|g" "$file"
        echo "✅ 已更新 $file"
    fi
done

echo "🧹 清理备份文件..."
find . -name "*.bak" -type f -delete 2>/dev/null || true

echo ""
echo "✅ 域名引用更新完成！"
echo ""
echo "📋 已更新的内容："
echo "  - 文档文件 (README.md, USER-MANUAL.md, PROJECT-DOCUMENTATION.md)"
echo "  - 配置文件 (config.yaml, params.yaml)"
echo "  - 模板文件 (layouts/*.html)"
echo ""
echo "📝 请检查并提交更改："
echo "  git add ."
echo "  git commit -m \"更新域名引用：$NEW_DOMAIN\""
echo "  git push origin main"
