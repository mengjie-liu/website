let bg = document.querySelector("#bgVd");
let vd = document.querySelector(".vd");
// console.log(vds);
var vds = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "c10",
  "c11",
  "c12",
  "c13",
  "c14",
  "c15",
  "c16",
];
var player = document.getElementById("player");
let ua = navigator.userAgent.toLowerCase();

function setSource01() {
  if (vds.length > 0) {
    var currentVideoIndex = Math.floor(Math.random() * vds.length);
    var currentVideo = "asset/" + vds[currentVideoIndex] + ".webm";
    player.src = currentVideo;
    player.load();
    player.play();
    vds.splice(currentVideoIndex, 1);
  } else {
    vds = [
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "c10",
      "c11",
      "c12",
      "c13",
      "c14",
      "c15",
      "c16",
    ];
    var currentVideoIndex = Math.floor(Math.random() * vds.length);
    var currentVideo = "asset/" + vds[currentVideoIndex] + ".webm";
    player.src = currentVideo;
    player.load();
    player.play();
    vds.splice(currentVideoIndex, 1);
  }
}

player.addEventListener("ended", nextVideo, false);

function nextVideo() {
  setSource01();
}

nextVideo();

document.addEventListener("click", function () {
  bg.style.display = "none";
});

var counter = 0;
var resetCounter = function () {
  bg.style.display = "none";
  counter = 0;
  let interval = setInterval(function () {
    counter += 1;
    if (counter > 20) {
      player.currentTime = 0;
      bg.style.display = "block";
      console.log("block");
      clearInterval(interval);
    }
  }, 2000);
  // return (counter = 0);
};

// var events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
// events.forEach(function (name) {
//   document.addEventListener(name, resetCounter, true);
// });

document.addEventListener("click", resetCounter, true);
// let interval = setInterval(function () {
//   counter += 1;
//   if (counter > 20) {
//     player.currentTime = 0;
//     bg.style.display = "block";
//     clearInterval(interval);
//   }
// }, 2000);
