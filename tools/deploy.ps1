#!/usr/bin/env pwsh
# =============================================================================
#  deploy.ps1 — 一键提交并推送到 GitHub Pages（Windows PowerShell）
# =============================================================================
#  用法：
#      powershell -ExecutionPolicy Bypass -File .\tools\deploy.ps1 "更新说明"
#
#  流程：自检 → 提交 → 推送
# =============================================================================

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

$owner = "JiangYunhang"
$repo  = "JiangYunhang.github.io"
$branch = "main"
$msg = if ($args.Count -ge 1) { $args[0] } else { "Update personal homepage" }

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  部署个人主页" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  分支: $branch"
Write-Host "  说明: $msg"
Write-Host ""

# ---- 1. 自检 ----
Write-Host "[1/3] 运行自检 ..." -ForegroundColor Yellow
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
  & python tools/check-site.py
  if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "自检未通过，已中止部署。" -ForegroundColor Red
    exit 1
  }
} else {
  Write-Host "未找到 Python，跳过自检。" -ForegroundColor Yellow
}
Write-Host ""

# ---- 2. 提交 ----
Write-Host "[2/3] 提交更改 ..." -ForegroundColor Yellow
git add -A
$staged = git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "  没有新的更改，无需提交。"
} else {
  git -c user.name="$owner" -c user.email="2069329624@qq.com" commit -m $msg
}
Write-Host ""

# ---- 3. 推送 ----
Write-Host "[3/3] 推送到 GitHub ..." -ForegroundColor Yellow
if (-not (git remote 2>$null)) {
  git remote add origin "https://github.com/$owner/$repo.git"
}
git -c http.version=HTTP/1.1 push -u origin $branch
Write-Host ""

Write-Host "==============================================" -ForegroundColor Green
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "  网站: https://$owner.github.io/"
Write-Host "  （等待 1-2 分钟生效）"
Write-Host "==============================================" -ForegroundColor Green
