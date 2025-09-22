Write-Host "🚀 开始构建博客（包含数据分析）..." -ForegroundColor Green
Write-Host ("=" * 50) -ForegroundColor Gray

# 运行数据分析脚本
Write-Host "📊 运行数据分析脚本..." -ForegroundColor Yellow
python scripts/run_scripts.py

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 数据分析脚本执行失败" -ForegroundColor Red
    exit 1
}

# 构建 CSS
Write-Host "🎨 构建 CSS..." -ForegroundColor Yellow
npm run build:uno:prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ CSS 构建失败" -ForegroundColor Red
    exit 1
}

# 构建 Hugo 网站
Write-Host "🏗️ 构建 Hugo 网站..." -ForegroundColor Yellow
.\.tools\hugo\hugo.exe --minify

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Hugo 构建失败" -ForegroundColor Red
    exit 1
}

Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host "✅ 构建完成！" -ForegroundColor Green
Write-Host "💡 提示: 数据分析结果已更新，网站已构建完成" -ForegroundColor Cyan

# 显示统计信息
if (Test-Path "data/highlights.json") {
    $highlights = Get-Content "data/highlights.json" | ConvertFrom-Json
    Write-Host "📝 高亮数据: $($highlights.Count) 篇文章包含高亮内容" -ForegroundColor Blue
}

if (Test-Path "data/externallinks.json") {
    $externalLinks = Get-Content "data/externallinks.json" | ConvertFrom-Json
    Write-Host "🔗 外部链接: $($externalLinks.Count) 个域名" -ForegroundColor Blue
}
