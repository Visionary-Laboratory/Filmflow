/* Edit this file to populate the page. Empty src values keep the requested slots blank.
   Put MP4 files in assets/videos/ and set src to "assets/videos/your-video.mp4".
   Optional fields: poster (image path), caption (prompt), title (display title).
   Each V2V example has separate referenceSrc/referencePoster and src/poster fields. */
window.FILMFLOW_CONTENT = {
  authors: "Anonymous authors",
  affiliations: "Paper under double-blind review",
  codeUrl: "",
  datasetUrl: "",
  longTakes: Array.from({length: 4}, (_, i) => ({
    id: `long-${String(i + 1).padStart(2, "0")}`,
    title: `Long take ${String(i + 1).padStart(2, "0")}`,
    src: "", poster: "", caption: ""
  })),
  shortShots: Array.from({length: 16}, (_, i) => ({
    id: `short-${String(i + 1).padStart(2, "0")}`,
    title: `Short shot ${String(i + 1).padStart(2, "0")}`,
    src: "", poster: "", caption: ""
  })),
  v2v: Array.from({length: 8}, (_, i) => ({
    id: `v2v-${String(i + 1).padStart(2, "0")}`,
    title: `Video-to-video ${String(i + 1).padStart(2, "0")}`,
    referenceSrc: "", referencePoster: "",
    src: "", poster: "", caption: ""
  }))
};
// Example: FILMFLOW_CONTENT.longTakes[0].src = "assets/videos/long-01.mp4";
// Example: FILMFLOW_CONTENT.longTakes[0].caption = "Your camera instruction.";
// Example: FILMFLOW_CONTENT.v2v[0].referenceSrc = "assets/videos/reference-01.mp4";
// Example: FILMFLOW_CONTENT.v2v[0].src = "assets/videos/v2v-01.mp4";
