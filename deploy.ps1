# Deploy this folder as GitHub Pages
# Repo name MUST be: JiangYunhang.github.io
# Then open: https://JiangYunhang.github.io/

# 1) Login once (browser):
#    gh auth login

# 2) From this directory, run:
#    powershell -ExecutionPolicy Bypass -File .\deploy.ps1

$ErrorActionPreference = "Stop"
$repo = "JiangYunhang.github.io"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "Please install GitHub CLI: https://cli.github.com/"
}

gh auth status

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

git add -A
$status = git status --porcelain
if ($status) {
  git commit -m "Publish personal homepage for JiangYunhang"
} else {
  Write-Host "No new changes to commit."
}

$exists = gh repo view "JiangYunhang/$repo" 2>$null
if (-not $exists) {
  gh repo create $repo --public --source=. --remote=origin --push
} else {
  $remote = git remote 2>$null
  if (-not $remote) {
    git remote add origin "https://github.com/JiangYunhang/$repo.git"
  }
  git push -u origin main
}

gh api -X PUT "repos/JiangYunhang/$repo/pages" -f build_type=workflow -f source[branch]=main -f source[path]=/ 2>$null
Write-Host ""
Write-Host "Done. Site URL: https://JiangYunhang.github.io/"
Write-Host "If Pages is not live yet: GitHub repo -> Settings -> Pages -> Deploy from branch main / (root)"
