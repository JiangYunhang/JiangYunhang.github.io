# 🎨 资源文件说明

这个目录存放**图片和音频**。

---

## 📁 `img/` — 图片

| 文件 | 用途 |
|---|---|
| `avatar.jpg` | 侧栏头像（默认使用） |
| `avatar.svg` | 矢量版头像（备用） |
| `album-placeholder.svg` | 音乐板块的占位封面（备用） |

### 怎么换头像

1. 把新图片放到 `assets/img/` 里，例如 `assets/img/me.png`
2. 编辑 `js/01-site-data.js`：

```js
avatar: "assets/img/me.png",
```

### 建议规格

| 项目 | 建议 |
|---|---|
| 尺寸 | 正方形，推荐 `400 × 400` 以上 |
| 格式 | `.jpg` / `.png` / `.webp`（`.jpg` 体积最小） |
| 体积 | 控制在 `200 KB` 以内，加载更快 |
| 主体位置 | 尽量居中（页面上会裁切为圆形） |

> 头像是按 `object-fit: cover` 圆形裁切的，原图建议用正方形。

---

## 📁 `music/` — 音频

放你喜欢的歌 mp3，供 `music.tracks[].src` 引用：

```js
music: {
  tracks: [
    {
      title: "歌曲名",
      meta:  "歌手 · 专辑",
      cover: "assets/img/cover.jpg",
      src:   "assets/music/song.mp3",
    },
  ],
}
```

> 音频文件会让仓库变大。只放 1–2 首自己有权使用的就好。
> 建议压缩成 `128 kbps` MP3，单首 3–5 MB。

---

## 📝 命名建议

| 类型 | 命名格式 | 例 |
|---|---|---|
| 头像 | `avatar.*` | `avatar.jpg` |
| 论文配图 | `paper-<简称>.*` | `paper-mfl-lm.png` |
| 封面 | `cover-<名称>.*` | `cover-song.jpg` |
| 项目截图 | `proj-<名称>.*` | `proj-hcc-ct.png` |

**用小写英文 + 连字符**，避免空格和中文路径（部分环境下中文路径会 404）。

---

## ⚠️ 注意

- `.gitignore` 里已经排除了 `*.mp3` 和 `*.wav` → **音频默认不会被提交**
  如果确实想放歌，请从 `.gitignore` 里删掉这两行
- 图片压缩后再放进来，能明显提升首屏加载速度
- 路径要写成**相对仓库根目录**的形式：`assets/img/xxx.jpg`
