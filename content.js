/* Edit this file to populate the page. Empty src values keep the requested slots blank.
   Put MP4 files in assets/videos/ and set src to "assets/videos/your-video.mp4".
   Optional fields: poster (image path), caption (prompt), title (display title).
   Each V2V example has separate referenceSrc/referencePoster and src/poster fields. */
window.FILMFLOW_CONTENT = {
  authors: [{"name": "Yiming Zhang", "marks": "1,2*"}, {"name": "Jiarui Guo", "marks": "2*"}, {"name": "Haojia Wei", "marks": "2,3*"}, {"name": "Yifei Liu", "marks": "4"}, {"name": "Yifan Yang", "marks": "2"}, {"name": "Hongjie Zhang", "marks": "4"}, {"name": "Xue Yang", "marks": "2"}, {"name": "Zhihang Zhong", "marks": "2†"}],
  affiliations: [{"name": "Cornell University", "marks": "1"}, {"name": "Shanghai Jiao Tong University", "marks": "2"}, {"name": "University of California, Los Angeles", "marks": "3"}, {"name": "Shanghai Artificial Intelligence Laboratory", "marks": "4"}],
  codeUrl: "",
  datasetUrl: "",
  t2vHighlights: {
  "t2v-01": [
    "Circle continuously",
    "Keep moving",
    "successively reveal",
    "facial close-up"
  ],
  "t2v-02": [
    "Orbit around",
    "slow rotation",
    "easing toward the end"
  ],
  "t2v-03": [
    "Follow",
    "roll upside down",
    "pass through the doorway",
    "recover upright",
    "overtake",
    "front three-quarter view"
  ],
  "t2v-04": [
    "focused on the sun",
    "lower the view",
    "pull focus",
    "Approach",
    "overtake",
    "turn back",
    "tracking in front"
  ],
  "t2v-05": [
    "Follow behind",
    "move around to the front",
    "finish facing the child"
  ],
  "t2v-06": [
    "Descend",
    "Turn smoothly to follow",
    "stable framing target"
  ],
  "t2v-07": [
    "Descend and approach",
    "track backward in front",
    "at close range"
  ],
  "t2v-08": [
    "Follow",
    "gradually pull away",
    "move to one side",
    "wide oblique view"
  ],
  "t2v-09": [
    "move toward",
    "zooming out",
    "Keep the car’s size steady"
  ],
  "t2v-10": [
    "move away",
    "zooming in",
    "Keep the car’s size steady"
  ],
  "t2v-11": [
    "Circle right",
    "moving closer",
    "Keep both faces visible",
    "no pause between movements"
  ],
  "t2v-12": [
    "Orbit about 90 degrees",
    "left to right",
    "pulling noticeably farther away",
    "Keep the people and balcony in view"
  ],
  "t2v-13": [
    "pan and tilt",
    "hold the final composition"
  ],
  "t2v-14": [
    "tilt upward",
    "finish on the face",
    "Hold the final portrait steadily"
  ],
  "t2v-15": [
    "Slowly push",
    "face close-up",
    "Keep him centered",
    "focal length fixed"
  ],
  "t2v-16": [
    "Pull straight back",
    "wide view",
    "Keep the subject centered"
  ],
  "t2v-17": [
    "Keep the camera in one place",
    "pan right"
  ],
  "t2v-18": [
    "Keep the camera fixed",
    "tilt down",
    "constant focal length"
  ],
  "t2v-19": [
    "Move sideways",
    "steadily pushing",
    "constant height and focal length"
  ],
  "t2v-20": [
    "Raise the camera vertically",
    "tilting down",
    "Keep the figure readable"
  ]
},
  t2v: Array.from({length: 20}, (_, i) => ({
    id: `t2v-${String(i + 1).padStart(2, "0")}`,
    title: `Text-to-video ${String(i + 1).padStart(2, "0")}`,
    wide: i < 4, // The first four long takes use larger frames in the shared T2V gallery.
    src: "", poster: "", caption: ""
  })),
  v2v: [
  {
    "id": "v2v-01",
    "title": "Vertigo (1958)",
    "referenceSrc": "assets/videos/v2v/vertigo-car-reference.mp4",
    "referencePoster": "assets/posters/v2v/vertigo-car-reference.jpg",
    "src": "assets/videos/v2v/vertigo-car-color.mp4",
    "poster": "assets/posters/v2v/vertigo-car-color.jpg"
  },
  {
    "id": "v2v-02",
    "title": "The Cell (2000)",
    "referenceSrc": "assets/videos/v2v/arc01-group-reference.mp4",
    "referencePoster": "assets/posters/v2v/arc01-group-reference.jpg",
    "src": "assets/videos/v2v/arc01-group-color.mp4",
    "poster": "assets/posters/v2v/arc01-group-color.jpg"
  },
  {
    "id": "v2v-03",
    "title": "Forrest Gump (1994)",
    "referenceSrc": "assets/videos/v2v/gump01-reference.mp4",
    "referencePoster": "assets/posters/v2v/gump01-reference.jpg",
    "src": "assets/videos/v2v/gump01-color.mp4",
    "poster": "assets/posters/v2v/gump01-color.jpg"
  },
  {
    "id": "v2v-04",
    "title": "Notorious (1946)",
    "referenceSrc": "assets/videos/v2v/notorious-reference.mp4",
    "referencePoster": "assets/posters/v2v/notorious-reference.jpg",
    "src": "assets/videos/v2v/notorious-color.mp4",
    "poster": "assets/posters/v2v/notorious-color.jpg"
  },
  {
    "id": "v2v-05",
    "title": "Prisoners (2013)",
    "referenceSrc": "assets/videos/v2v/pan01-reference.mp4",
    "referencePoster": "assets/posters/v2v/pan01-reference.jpg",
    "src": "assets/videos/v2v/pan01-courtyard-color.mp4",
    "poster": "assets/posters/v2v/pan01-courtyard-color.jpg"
  },
  {
    "id": "v2v-07",
    "title": "2 AM Coffee (2023)",
    "referenceSrc": "assets/videos/v2v/coffee-clip02-reference.mp4",
    "referencePoster": "assets/posters/v2v/coffee-clip02-reference.jpg",
    "src": "assets/videos/v2v/coffee-clip02-color.mp4",
    "poster": "assets/posters/v2v/coffee-clip02-color.jpg"
  }
]
};
// Example: FILMFLOW_CONTENT.t2v[0].src = "assets/videos/t2v-01.mp4";
// Example: FILMFLOW_CONTENT.t2v[0].caption = "Your camera instruction.";
// Example: FILMFLOW_CONTENT.v2v[0].referenceSrc = "assets/videos/reference-01.mp4";
// Example: FILMFLOW_CONTENT.v2v[0].src = "assets/videos/v2v-01.mp4";
