#!/usr/bin/env python3
"""
preview.py — 本地预览服务器
=========================
在修改网页时用这个脚本在本地实时查看效果。

用法：
    python tools/preview.py            # 默认 http://localhost:8080
    python tools/preview.py 3000       # 指定端口

启动后浏览器打开提示的地址即可。
按 Ctrl+C 停止。
"""

import http.server
import os
import socketserver
import sys
import threading
import webbrowser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Handler(http.server.SimpleHTTPRequestHandler):
    """静默处理请求，避免刷屏。"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        pass  # 不打印访问日志


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", port), Handler) as httpd:
        url = f"http://localhost:{port}"
        print("=" * 56)
        print("  本地预览已启动")
        print(f"  地址: {url}")
        print("  根目录:", ROOT)
        print("  停止: Ctrl+C")
        print("=" * 56)
        print()
        threading.Timer(1.0, lambda: webbrowser.open(url)).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n已停止。")
            httpd.shutdown()


if __name__ == '__main__':
    main()
