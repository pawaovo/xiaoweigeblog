#!/bin/bash

# 域名更新验证脚本
# 检查项目中是否还有旧域名引用

set -e

echo "🔍 验证域名更新完整性"
echo ""

# 定义要检查的旧域名模式
OLD_PATTERNS=(
    "pawaovo.github.io/xiaoweigeblog"
    "pawaovo.github.io/xiaoweige-blog"
    "www.yourdomain.com"
    "yourdomain.com"
    "www.geedea.pro"
    "geedea.pro"
)

# 定义当前域名
CURRENT_DOMAIN="blog.xiaoweigezzz.xyz"

echo "📋 当前配置的域名：$CURRENT_DOMAIN"
echo ""

# 检查配置文件
echo "🔧 检查配置文件..."

# 检查 baseURL
BASEURL=$(grep "baseURL:" config/_default/config.yaml | cut -d' ' -f2)
if [[ "$BASEURL" == "https://$CURRENT_DOMAIN/" ]]; then
    echo "✅ config.yaml baseURL 配置正确"
else
    echo "❌ config.yaml baseURL 配置错误：$BASEURL"
fi

# 检查 CNAME 文件
if [[ -f "static/CNAME" ]]; then
    CNAME_CONTENT=$(cat static/CNAME | tr -d '\n\r')
    if [[ "$CNAME_CONTENT" == "$CURRENT_DOMAIN" ]]; then
        echo "✅ CNAME 文件配置正确"
    else
        echo "❌ CNAME 文件配置错误：$CNAME_CONTENT"
    fi
else
    echo "❌ CNAME 文件不存在"
fi

echo ""
echo "🔍 搜索旧域名引用..."

# 搜索旧域名引用
FOUND_ISSUES=0

for pattern in "${OLD_PATTERNS[@]}"; do
    echo "检查模式：$pattern"
    
    # 搜索文件内容（排除 .git、node_modules、public 等目录和验证脚本本身）
    MATCHES=$(grep -r "$pattern" . \
        --exclude-dir=.git \
        --exclude-dir=node_modules \
        --exclude-dir=public \
        --exclude-dir=resources \
        --exclude="*.log" \
        --exclude="*.bak" \
        --exclude="verify-domain-update.sh" \
        --exclude="update-domain-references.sh" \
        --exclude="setup-domain.sh" \
        2>/dev/null || true)
    
    if [[ -n "$MATCHES" ]]; then
        # 过滤掉合理的引用（如备用地址说明）
        FILTERED_MATCHES=$(echo "$MATCHES" | grep -v "备用地址" | grep -v "GitHub Pages" || true)
        if [[ -n "$FILTERED_MATCHES" ]]; then
            echo "❌ 发现旧域名引用："
            echo "$FILTERED_MATCHES"
            FOUND_ISSUES=$((FOUND_ISSUES + 1))
            echo ""
        fi
    fi
done

echo ""
echo "📊 验证结果："

if [[ $FOUND_ISSUES -eq 0 ]]; then
    echo "✅ 所有域名引用已正确更新！"
    echo ""
    echo "📋 当前配置摘要："
    echo "  - 主域名：$CURRENT_DOMAIN"
    echo "  - baseURL：$BASEURL"
    echo "  - CNAME：$(cat static/CNAME 2>/dev/null || echo '未找到')"
    echo ""
    echo "🚀 可以安全提交更改："
    echo "  git add ."
    echo "  git commit -m \"完成域名配置和引用更新\""
    echo "  git push origin main"
else
    echo "⚠️  发现 $FOUND_ISSUES 个问题需要修复"
    echo ""
    echo "请检查上述输出并手动修复相关文件"
fi

echo ""
echo "🌐 验证网站访问："
echo "  本地：http://localhost:1313"
echo "  线上：https://$CURRENT_DOMAIN"
