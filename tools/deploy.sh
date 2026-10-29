#!/usr/bin/env bash
# =============================================================================
#  deploy.sh — 一键提交并推送到 GitHub Pages
# =============================================================================
#  用法：
#      bash tools/deploy.sh "更新说明"
#
#  流程：自检 → 提交 → 推送
#  推送后等待 1-2 分钟，网站 https://jiangyunhang.github.io/ 自动更新。
# =============================================================================

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

OWNER="JiangYunhang"
REPO="JiangYunhang.github.io"
BRANCH="main"
MSG="${1:-Update personal homepage}"

echo "=============================================="
echo "  部署个人主页"
echo "=============================================="
echo "  分支: $BRANCH"
echo "  说明: $MSG"
echo

# ---- 1. 自检 ----
echo "[1/3] 运行自检 …"
if command -v python3 >/dev/null 2>&1; then
  python3 tools/check-site.py || {
    echo ""
    echo "❌ 自检未通过，已中止部署。"
    exit 1
  }
elif command -v python >/dev/null 2>&1; then
  python tools/check-site.py || {
    echo ""
    echo "❌ 自检未通过，已中止部署。"
    exit 1
  }
else
  echo "⚠️  未找到 Python，跳过自检。"
fi
echo

# ---- 2. 提交 ----
echo "[2/3] 提交更改 …"
git add -A
if git diff --cached --quiet; then
  echo "  没有新的更改，无需提交。"
else
  git -c user.name="$OWNER" -c user.email="2069329624@qq.com" \
      commit -m "$MSG"
fi
echo

# ---- 3. 推送 ----
echo "[3/3] 推送到 GitHub …"
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "https://github.com/$OWNER/$REPO.git"
fi
git -c http.version=HTTP/1.1 push -u origin "$BRANCH"
echo

echo "=============================================="
echo "  ✅ 部署完成！"
echo "  网站: https://$OWNER.github.io/"
echo "  （等待 1-2 分钟生效）"
echo "=============================================="
