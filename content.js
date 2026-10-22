/* Edit this file to populate the page. Empty src values keep the requested slots blank.
   Put MP4 files in assets/videos/ and set src to "assets/videos/your-video.mp4".
   Optional fields: poster (image path), caption (prompt), title (display title).
   Each V2V example has separate referenceSrc/referencePoster and src/poster fields. */
window.FILMFLOW_CONTENT = {
  authors: "Anonymous authors",
  affiliations: "Paper under double-blind review",
  codeUrl: "",
  datasetUrl: "",
  t2v: Array.from({length: 20}, (_, i) => ({
    id: `t2v-${String(i + 1).padStart(2, "0")}`,
    title: `Text-to-video ${String(i + 1).padStart(2, "0")}`,
    wide: i < 4, // The first four long takes use larger frames in the shared T2V gallery.
    src: "", poster: "", caption: ""
  })),
  v2v: [
  {
    "id": "v2v-01",
    "title": "13 · Vertigo",
    "caption": "Orbit around a stationary car.",
    "referenceSrc": "assets/videos/v2v/vertigo-car-reference.mp4",
    "referencePoster": "assets/posters/v2v/vertigo-car-reference.jpg",
    "src": "assets/videos/v2v/vertigo-car-color.mp4",
    "poster": "assets/posters/v2v/vertigo-car-color.jpg"
  },
  {
    "id": "v2v-02",
    "title": "arc01",
    "caption": "An overhead camera move around a seated group.",
    "referenceSrc": "assets/videos/v2v/arc01-group-reference.mp4",
    "referencePoster": "assets/posters/v2v/arc01-group-reference.jpg",
    "src": "assets/videos/v2v/arc01-group-color.mp4",
    "poster": "assets/posters/v2v/arc01-group-color.jpg"
  },
  {
    "id": "v2v-03",
    "title": "gump01",
    "caption": "A gradual approach toward a seated subject.",
    "referenceSrc": "assets/videos/v2v/gump01-reference.mp4",
    "referencePoster": "assets/posters/v2v/gump01-reference.jpg",
    "src": "assets/videos/v2v/gump01-color.mp4",
    "poster": "assets/posters/v2v/gump01-color.jpg"
  },
  {
    "id": "v2v-04",
    "title": "07 · Notorious",
    "caption": "Crane down and push in toward the hands.",
    "referenceSrc": "assets/videos/v2v/notorious-reference.mp4",
    "referencePoster": "assets/posters/v2v/notorious-reference.jpg",
    "src": "assets/videos/v2v/notorious-color.mp4",
    "poster": "assets/posters/v2v/notorious-color.jpg"
  },
  {
    "id": "v2v-05",
    "title": "pan01",
    "caption": "Pan to follow a passing runner.",
    "referenceSrc": "assets/videos/v2v/pan01-reference.mp4",
    "referencePoster": "assets/posters/v2v/pan01-reference.jpg",
    "src": "assets/videos/v2v/pan01-color.mp4",
    "poster": "assets/posters/v2v/pan01-color.jpg"
  },
  {
    "id": "v2v-06",
    "title": "28 · Kill Bill",
    "caption": "Overhead tracking of a moving subject.",
    "referenceSrc": "assets/videos/v2v/kill-bill-reference.mp4",
    "referencePoster": "assets/posters/v2v/kill-bill-reference.jpg",
    "src": "assets/videos/v2v/kill-bill-color.mp4",
    "poster": "assets/posters/v2v/kill-bill-color.jpg"
  },
  {
    "id": "v2v-07",
    "title": "Video-to-video 07",
    "referenceSrc": "",
    "referencePoster": "",
    "src": "",
    "poster": "",
    "caption": ""
  },
  {
    "id": "v2v-08",
    "title": "Video-to-video 08",
    "referenceSrc": "",
    "referencePoster": "",
    "src": "",
    "poster": "",
    "caption": ""
  }
]
};
// Example: FILMFLOW_CONTENT.t2v[0].src = "assets/videos/t2v-01.mp4";
// Example: FILMFLOW_CONTENT.t2v[0].caption = "Your camera instruction.";
// Example: FILMFLOW_CONTENT.v2v[0].referenceSrc = "assets/videos/reference-01.mp4";
// Example: FILMFLOW_CONTENT.v2v[0].src = "assets/videos/v2v-01.mp4";
