# Deploy this folder as GitHub Pages
# Repo: JiangYunhang.github.io  →  https://JiangYunhang.github.io/
#
#   powershell -ExecutionPolicy Bypass -File .\deploy.ps1

$ErrorActionPreference = "Stop"
$repo = "JiangYunhang.github.io"
$owner = "JiangYunhang"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$files = @(
  ".gitignore", ".nojekyll", "index.html", "README.md", "deploy.ps1",
  "css/style.css", "js/main.js", "js/site-data.js",
  "assets/img/avatar.jpg", "assets/img/avatar.svg", "assets/img/album-placeholder.svg",
  "assets/img/.gitkeep", "assets/music/.gitkeep"
)
foreach ($f in $files) {
  if (Test-Path $f) { git add -- $f }
}

$status = git status --porcelain
if ($status) {
  $env:GIT_AUTHOR_NAME = "Jiang Yunhang"
  $env:GIT_AUTHOR_EMAIL = "2069329624@qq.com"
  $env:GIT_COMMITTER_NAME = "Jiang Yunhang"
  $env:GIT_COMMITTER_EMAIL = "2069329624@qq.com"
  git commit -m "Update personal homepage"
} else {
  Write-Host "No new changes to commit."
}

$remote = git remote 2>$null
if (-not $remote) {
  git remote add origin "https://github.com/$owner/$repo.git"
}

git -c http.version=HTTP/1.1 push -u origin main
Write-Host ""
Write-Host "Done. Site: https://$owner.github.io/"
