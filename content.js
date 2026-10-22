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
  t2v: [
  {
    "id": "t2v-01",
    "title": "Six robots · continuous orbit",
    "wide": true,
    "src": "assets/videos/t2v/robot-ensemble.mp4",
    "poster": "assets/posters/t2v/robot-ensemble.jpg",
    "caption": "Circle continuously around the center of six distinct robots. Keep moving as you successively reveal a readable facial close-up of each robot.",
    "duration": "21 s"
  },
  {
    "id": "t2v-02",
    "title": "Bullet-time orbit",
    "wide": true,
    "src": "assets/videos/t2v/bullet-time.mp4",
    "poster": "assets/posters/t2v/bullet-time.jpg",
    "caption": "Orbit around the character as they lean back to dodge. Let the later slow rotation continue before easing toward the end of the shot.",
    "duration": "11 s"
  },
  {
    "title": "Inverted corridor traversal",
    "src": "assets/videos/t2v/corridor-inverted-follow.mp4",
    "poster": "assets/posters/t2v/corridor-inverted-follow.jpg",
    "caption": "Follow the walking astronaut, roll upside down while advancing, pass through the doorway, recover upright and overtake into a front three-quarter view.",
    "id": "t2v-03",
    "wide": true,
    "duration": "18 s"
  },
  {
    "title": "Sun reveal and running pursuit",
    "src": "assets/videos/t2v/orchard-realistic-pursuit.mp4",
    "poster": "assets/posters/t2v/orchard-realistic-pursuit.jpg",
    "caption": "Begin focused on the sun, then lower the view and pull focus onto the runner’s back. Approach, overtake from the side, turn back and continue tracking in front.",
    "id": "t2v-04",
    "wide": true,
    "duration": "20 s"
  },
  {
    "id": "t2v-05",
    "title": "Rear tracking to front view",
    "wide": false,
    "src": "assets/videos/t2v/tricycle-rear-to-front.mp4",
    "poster": "assets/posters/t2v/tricycle-rear-to-front.jpg",
    "caption": "Follow behind the child’s tricycle through the corridor. As it enters the lounge, move around to the front and finish facing the child when the tricycle stops.",
    "duration": "13 s"
  },
  {
    "id": "t2v-06",
    "title": "Crane down and track the car",
    "wide": false,
    "src": "assets/videos/t2v/crane-car-tracking.mp4",
    "poster": "assets/posters/t2v/crane-car-tracking.jpg",
    "caption": "Descend from the cinema sign to the roadside as a car approaches. Turn smoothly to follow the car, keeping the upper cabin as a stable framing target.",
    "duration": "10 s"
  },
  {
    "id": "t2v-07",
    "title": "Wide view to front follow",
    "wide": false,
    "src": "assets/videos/t2v/trench-approach.mp4",
    "poster": "assets/posters/t2v/trench-approach.jpg",
    "caption": "Begin far above and to one side of the trench. Descend and approach the walking officer, then track backward in front of him at close range.",
    "duration": "10 s"
  },
  {
    "id": "t2v-08",
    "title": "Close follow to wide view",
    "wide": false,
    "src": "assets/videos/t2v/trench-pull-out.mp4",
    "poster": "assets/posters/t2v/trench-pull-out.jpg",
    "caption": "Follow the walking officer closely, then gradually pull away and move to one side. Finish with a wide oblique view of the officer and trench.",
    "duration": "10 s"
  },
  {
    "id": "t2v-09",
    "title": "Dolly in · zoom out",
    "wide": false,
    "src": "assets/videos/t2v/dolly-in-zoom-out.mp4",
    "poster": "assets/posters/t2v/dolly-in-zoom-out.jpg",
    "caption": "From an elevated oblique view, move toward the convertible while zooming out. Keep the car’s size steady as the background perspective expands.",
    "duration": "6 s"
  },
  {
    "id": "t2v-10",
    "title": "Dolly out · zoom in",
    "wide": false,
    "src": "assets/videos/t2v/dolly-out-zoom-in.mp4",
    "poster": "assets/posters/t2v/dolly-out-zoom-in.jpg",
    "caption": "From an elevated oblique view, move away from the convertible while zooming in. Keep the car’s size steady as the background perspective compresses.",
    "duration": "6 s"
  },
  {
    "id": "t2v-11",
    "title": "Orbit and push in",
    "wide": false,
    "src": "assets/videos/t2v/orbit-push-in.mp4",
    "poster": "assets/posters/t2v/orbit-push-in.jpg",
    "caption": "Circle right around the embracing couple while gradually moving closer. Keep both faces visible as the shot tightens, with no pause between movements.",
    "duration": "10 s"
  },
  {
    "id": "t2v-12",
    "title": "Orbit and pull out",
    "wide": false,
    "src": "assets/videos/t2v/balcony-orbit-pull-out.mp4",
    "poster": "assets/posters/t2v/balcony-orbit-pull-out.jpg",
    "caption": "Orbit about 90 degrees from left to right around the occupied balcony while pulling noticeably farther away. Keep the people and balcony in view.",
    "duration": "8 s"
  },
  {
    "id": "t2v-13",
    "title": "Find the occupied balcony",
    "wide": false,
    "src": "assets/videos/t2v/balcony-reveal.mp4",
    "poster": "assets/posters/t2v/balcony-reveal.jpg",
    "caption": "Start on an empty balcony, then smoothly pan and tilt toward a balcony with people. Settle on the occupants and hold the final composition.",
    "duration": "8 s"
  },
  {
    "id": "t2v-14",
    "title": "Shoes to face",
    "wide": false,
    "src": "assets/videos/t2v/shoes-to-face.mp4",
    "poster": "assets/posters/t2v/shoes-to-face.jpg",
    "caption": "Start at the shoes, slowly tilt upward past the clothing, and finish on the face. Hold the final portrait steadily.",
    "duration": "8 s"
  },
  {
    "id": "t2v-15",
    "title": "Slow push-in",
    "wide": false,
    "src": "assets/videos/t2v/push-in.mp4",
    "poster": "assets/posters/t2v/push-in.jpg",
    "caption": "Slowly push toward the seated man, moving from a medium shot to a face close-up. Keep him centered and the focal length fixed.",
    "duration": "8 s"
  },
  {
    "id": "t2v-16",
    "title": "Slow pull-out",
    "wide": false,
    "src": "assets/videos/t2v/pull-out.mp4",
    "poster": "assets/posters/t2v/pull-out.jpg",
    "caption": "Pull straight back from the lone soldier, opening from a medium shot into a wide view of the grassland and trench. Keep the subject centered.",
    "duration": "8 s"
  },
  {
    "id": "t2v-17",
    "title": "Pan across the room",
    "wide": false,
    "src": "assets/videos/t2v/pan.mp4",
    "poster": "assets/posters/t2v/pan.jpg",
    "caption": "Keep the camera in one place and slowly pan right across the diner, from the man at the table to the person beside the window.",
    "duration": "8 s"
  },
  {
    "id": "t2v-18",
    "title": "Tilt down the facade",
    "wide": false,
    "src": "assets/videos/t2v/tilt-down.mp4",
    "poster": "assets/posters/t2v/tilt-down.jpg",
    "caption": "Keep the camera fixed and slowly tilt down from the mansion’s roof and upper windows to the ground floor. Maintain a constant focal length.",
    "duration": "8 s"
  },
  {
    "title": "Truck and push in",
    "src": "assets/videos/t2v/truck-push-in.mp4",
    "poster": "assets/posters/t2v/truck-push-in.jpg",
    "caption": "Move sideways along the kitchen aisle while steadily pushing toward the working chef. Let foreground counter objects shift aside as the framing tightens, keeping the camera at a constant height and focal length.",
    "id": "t2v-19",
    "wide": false,
    "duration": "8 s"
  },
  {
    "title": "Pedestal up and tilt down",
    "src": "assets/videos/t2v/pedestal-tilt-down.mp4",
    "poster": "assets/posters/t2v/pedestal-tilt-down.jpg",
    "caption": "Raise the camera vertically while tilting down toward the figure in the meadow. Keep the figure readable as the view gradually opens onto the surrounding grassland.",
    "id": "t2v-20",
    "wide": false,
    "duration": "8 s"
  }
],
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
