#!/bin/bash

# 域名配置脚本
# 用于快速配置自定义域名

set -e

echo "🌐 博客域名配置工具"
echo ""

# 检查参数
if [ $# -eq 0 ]; then
    echo "使用方法："
    echo "  ./setup-domain.sh example.com            # 配置顶级域名"
    echo "  ./setup-domain.sh www.example.com       # 配置 www 子域名"
    echo "  ./setup-domain.sh --github-pages        # 恢复 GitHub Pages 默认域名"
    echo ""
    exit 1
fi

DOMAIN=$1

# 恢复 GitHub Pages 默认配置
if [ "$DOMAIN" = "--github-pages" ]; then
    echo "🔄 恢复 GitHub Pages 默认配置..."
    
    # 更新 config.yaml
    sed -i.bak "s|baseURL: .*|baseURL: https://pawaovo.github.io/xiaoweigeblog/|" config/_default/config.yaml
    
    # 删除 CNAME 文件
    if [ -f "static/CNAME" ]; then
        rm static/CNAME
        echo "✅ 已删除 CNAME 文件"
    fi
    
    echo "✅ 已恢复 GitHub Pages 默认配置"
    echo "📝 请提交更改："
    echo "   git add ."
    echo "   git commit -m \"恢复 GitHub Pages 默认域名\""
    echo "   git push origin main"
    exit 0
fi

echo "🔧 配置域名：$DOMAIN"

# 验证域名格式（支持子域名）
if [[ ! $DOMAIN =~ ^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$ ]]; then
    echo "❌ 域名格式不正确"
    echo "   正确格式：example.com、www.example.com 或 blog.example.com"
    exit 1
fi

# 更新 Hugo 配置
echo "📝 更新 Hugo 配置..."
sed -i.bak "s|baseURL: .*|baseURL: https://$DOMAIN/|" config/_default/config.yaml

# 创建 CNAME 文件
echo "📄 创建 CNAME 文件..."
echo "$DOMAIN" > static/CNAME

echo ""
echo "✅ 域名配置完成！"
echo ""
echo "📋 接下来的步骤："
echo ""
echo "1. 📤 提交更改到 GitHub："
echo "   git add ."
echo "   git commit -m \"配置自定义域名：$DOMAIN\""
echo "   git push origin main"
echo ""
echo "2. ⚙️ 在 GitHub 仓库设置中："
echo "   - 进入 Settings → Pages"
echo "   - 在 Custom domain 中输入：$DOMAIN"
echo "   - 勾选 Enforce HTTPS"
echo ""
echo "3. 🌐 在域名注册商配置 DNS："

if [[ $DOMAIN == *.* ]] && [[ $DOMAIN != *.*.* ]]; then
    # 顶级域名 (example.com)
    echo "   类型: A, 名称: @, 值: 185.199.108.153"
    echo "   类型: A, 名称: @, 值: 185.199.109.153"
    echo "   类型: A, 名称: @, 值: 185.199.110.153"
    echo "   类型: A, 名称: @, 值: 185.199.111.153"
else
    # 子域名 (www.example.com 或 blog.example.com)
    SUBDOMAIN=$(echo $DOMAIN | cut -d'.' -f1)
    echo "   类型: CNAME, 名称: $SUBDOMAIN, 值: pawaovo.github.io"
fi

echo ""
echo "4. ⏰ 等待 DNS 生效（通常 5-30 分钟）"
echo ""
echo "🔍 验证域名是否生效："
echo "   nslookup $DOMAIN"
echo "   curl -I https://$DOMAIN"
