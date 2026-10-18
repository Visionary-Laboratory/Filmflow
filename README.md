# FilmFlow 论文项目页

参考 PhotoFlow 的论文展示结构。纯 HTML/CSS/JavaScript，无需安装前端依赖。

## 本地预览

在本目录执行：

```sh
python3 -m http.server 8000 
```

访问 http://localhost:8000 。也可以直接打开 `index.html`。

## Demo 布局

- 长镜头：4 个空位，桌面端 2 × 2。
- 短镜头：16 个空位，桌面端 4 × 4。
- Video-to-video：8 个空位，桌面端 4 × 2。
- 平板端 2 列，手机端 1 列；所有视频位保持 16:9。

## 替换视频和文字

统一编辑 `content.js`。视频放到 `assets/videos/`。在配置末尾添加：

```js
FILMFLOW_CONTENT.longTakes[0].src = "assets/videos/long-01.mp4";
FILMFLOW_CONTENT.longTakes[0].poster = "assets/long-01.jpg"; // 可选
FILMFLOW_CONTENT.longTakes[0].title = "A continuous reveal";
FILMFLOW_CONTENT.longTakes[0].caption = "镜头提示词或说明";
FILMFLOW_CONTENT.shortShots[0].src = "assets/videos/short-01.mp4";
FILMFLOW_CONTENT.v2v[0].src = "assets/videos/v2v-01.mp4";
```

数组使用从 0 开始的索引。未设置 `src` 的空位不发起视频请求，也不会显示虚假播放按钮。填写 `src` 后自动显示原生视频播放器；播放新视频会暂停其他视频。V2V 可以填入包含参考和结果对比的完整视频，仍保持总计 8 个展示位。

同一配置中可设置 `authors`、`affiliations`、`codeUrl` 和 `datasetUrl`。没有公开地址的资源显示 Coming soon。

## 论文与图片

页面文案来自相邻 `iclr_files/8246.pdf`（FilmFlow 论文）；当前论文为匿名审稿版本，因此保留 Anonymous authors，不推测作者和机构。

- `assets/filmflow-paper.pdf`：论文副本。
- `assets/teaser.png`：使用用户指定的 `teaser_v14.png` 原图。
- `assets/method.png`：从 `FilmFlow_design_v4.pdf` 渲染。
- 论文摘要在网页中做了精简，保留方法和 CinemaBench 的 150 / 750 / 60 数据，不添加未核实的结果。

仓库根目录可直接作为静态托管根目录，兼容 GitHub Pages 子路径。网站源码独立于 FilmFlow 的运行代码和环境配置。

## 发布

GitHub Pages 地址：https://visionary-laboratory.github.io/Filmflow/

使用 `gh-pages` 分支根目录发布。修改完成后提交并推送该分支。
