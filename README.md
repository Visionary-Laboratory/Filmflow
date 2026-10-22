# FilmFlow 论文项目页

参考 PhotoFlow 的论文展示结构。纯 HTML/CSS/JavaScript，无需安装前端依赖。

## 本地预览

在本目录执行：

```sh
python3 -m http.server 8000 
```

访问 http://localhost:8000 。也可以直接打开 `index.html`。

## Demo 布局

- Text-to-video（T2V）：同一区域内展示 20 个空位。前 4 个长镜头为大尺寸，桌面端每行 2 个；后 16 个短镜头每行 4 个。不增加长短镜头分区或标题。`content.js` 中 `wide: true` 控制大尺寸展示。
- Video-to-video：8 组对比示例，每组分别预留原视频与 FilmFlow 结果，共 16 个视频位。桌面端每行 2 组，共 4 行；组内左右并排。平板端每行 1 组；手机端原视频在上、结果在下。
- T2V 平板端 2 列，手机端 1 列；所有视频位保持 16:9。
- 每个 T2V 视频上方固定预留 Input prompt 文本区，长镜头预留更大的空间。填写 `caption` 后显示完整输入文本，保留换行并随内容自动增高。

## 替换视频和文字

统一编辑 `content.js`。视频放到 `assets/videos/`。在配置末尾添加：

```js
FILMFLOW_CONTENT.t2v[0].src = "assets/videos/t2v-01.mp4";
FILMFLOW_CONTENT.t2v[0].poster = "assets/t2v-01.jpg"; // 可选
FILMFLOW_CONTENT.t2v[0].title = "A continuous reveal";
FILMFLOW_CONTENT.t2v[0].caption = "镜头提示词或说明";
FILMFLOW_CONTENT.v2v[0].referenceSrc = "assets/videos/reference-01.mp4";
FILMFLOW_CONTENT.v2v[0].referencePoster = "assets/reference-01.jpg"; // 可选
FILMFLOW_CONTENT.v2v[0].src = "assets/videos/v2v-01.mp4";
```

数组使用从 0 开始的索引。未设置 `src` 的空位不发起视频请求，也不会显示虚假播放按钮。填写 `src` 后自动显示原生视频播放器；播放新示例会暂停其他示例的视频；同一 V2V 组的原视频与结果可以分别控制、同时播放。`referenceSrc` 配置原视频，`src` 配置结果，两侧都可以独立留空。

同一配置中可设置 `authors`、`affiliations`、`codeUrl` 和 `datasetUrl`。没有公开地址的资源显示 Coming soon。

## 论文与图片

页面文案来自相邻 `iclr_files/8246.pdf`（FilmFlow 论文）；当前论文为匿名审稿版本，因此保留 Anonymous authors，不推测作者和机构。

- `assets/filmflow-paper.pdf`：论文副本。
- `assets/teaser.png`：使用用户指定的 `teaser_v14.png` 原图。
- `assets/method.png`：从用户指定的 `FilmFlow_design_v17.pdf` 以 2 倍分辨率渲染；点击网页方法图可打开原始 PDF（`assets/filmflow-method.pdf`）。
- 论文摘要在网页中做了精简，保留方法和 CinemaBench 的 150 / 750 / 60 数据，不添加未核实的结果。

仓库根目录可直接作为静态托管根目录，兼容 GitHub Pages 子路径。网站源码独立于 FilmFlow 的运行代码和环境配置。

## 发布

GitHub Pages 地址：https://visionary-laboratory.github.io/Filmflow/

使用 `gh-pages` 分支根目录发布。修改完成后提交并推送该分支。

## 已归档 V2V 彩色示例

已填入 8 组：13、arc01、gump01、07、pan01、28、coffee_clip02、30（Titanic）。每组原视频在左、彩色结果在右。`assets/v2v-manifest.json` 记录归档来源与视频 SHA-256；视频为归档文件的原样副本。八个位置均已填入已批准的彩色视频。

## V2V 标题与播放

八组标题显示来源影片及年份。每组的 `Play both` 按钮先对齐播放位置，再同时播放原片与结果；播放时可用 `Pause both` 同时暂停。保留两侧播放器的独立控制，不显示组下方说明。影片出处与核对依据记录在 `assets/v2v-manifest.json`；coffee_clip02 来自 [2 AM Coffee (2023)](https://www.youtube.com/watch?v=SR__amDl1c8)。
