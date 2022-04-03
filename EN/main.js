let about = document.getElementById("about");
let aboutText = document.getElementById("aboutText");
let toggleAbout = false;
let aboutClose = document.getElementById("aboutClose");
about.onclick = function (e) {
  e.preventDefault();
  if (toggleAbout == false) {
    aboutText.style.display = "block";
    toggleAbout = true;
    aboutClose.onclick = function (e) {
      e.preventDefault();
      aboutText.style.display = "none";
      toggleAbout = false;
    };
  } else {
    aboutText.style.display = "none";
    toggleAbout = false;
  }
};

let pause = document.getElementById("pause");
let togglePause = false;
let vd = document.getElementById("bgVideo");
pause.onclick = function (e) {
  e.preventDefault();
  if (togglePause == false) {
    vd.pause();
    pause.innerHTML = "Play";
    togglePause = true;
  } else {
    vd.play();
    pause.innerHTML = "Pause";
    togglePause = false;
  }
};

let sp1 = document.getElementById("sp1");
let sp05 = document.getElementById("sp05");
let sp2 = document.getElementById("sp2");
let speed;
sp1.addEventListener("click", function (e) {
  e.preventDefault();
  vd.playbackRate = 1;
  speed = vd.playbackRate;
  sp1.classList.remove("diactive");
  sp1.classList.add("active");
  sp05.classList.remove("active");
  sp2.classList.remove("active");
  sp05.classList.add("diactive");
  sp2.classList.add("diactive");
});
sp05.addEventListener("click", function (e) {
  e.preventDefault();
  vd.playbackRate = 0.5;
  speed = vd.playbackRate;
  sp05.classList.remove("diactive");
  sp05.classList.add("active");
  sp1.classList.remove("active");
  sp2.classList.remove("active");
  sp1.classList.add("diactive");
  sp2.classList.add("diactive");
});
sp2.addEventListener("click", function (e) {
  e.preventDefault();
  vd.playbackRate = 2;
  speed = vd.playbackRate;
  sp2.classList.remove("diactive");
  sp2.classList.add("active");
  sp1.classList.remove("active");
  sp05.classList.remove("active");
  sp1.classList.add("diactive");
  sp05.classList.add("diactive");
});

let works = document.getElementById("work");
let work = document.querySelectorAll(".work");
let list = document.querySelector("#workList");
let toggleWork = false;
let caption = document.getElementById("cap");
let captions = [
  "cast aluminum, cast bondo, ceramic bushings, machined plexiglass",
  "found car part, fan blade, electrical tape, found cable and wires",
  "found sassafras branch, 9 speaker drivers, various adhesives, found wood and bark",
  "cast aluminum, found plastic, cast bondo, ceramic bushings, found hardware, cable clamp, machined plexiglass",
  "drift log with rusted steel inclusions, found wood, fiberglass, total boat epoxy resin, 18’ sunfish parts, rusted crankshaft (unknown origin), aluminum composite panel, dried citrus fruits, caltrops, barnacles, plant matter, hoses from abandoned building",
  "oak branch, neon tube, transformer, plant matter, various viscous substances",
  "pine, steel, various adhesives, wires, amplifier, speakers, modified AM radio static (10:02), MP3 player",
  "plastic basin, chain hoist, contact microphone, amplifier and effect pedal, crushed wheel from a car, dead birds, sediment, extension cords, found aluminum, gas can, noise",
];
let startTime = [15, 50, 80, 150, 170, 350, 380, 410];
works.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    if (toggleWork == false) {
      list.style.display = "block";
      toggleWork = true;
    } else {
      list.style.display = "none";
      toggleWork = false;
    }
    // caption.innerHTML = "";
    // vd.play();
    // vd.pause();
    // vd.currentTime = 0;
    // vd.play();
    console.log(toggleWork);
  },
  false
);
for (let i = 0; i < work.length; i++) {
  work[i].addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      vd.pause();
      vd.currentTime = startTime[i];
      vd.play();
    },
    false
  );
}

let approxTime = 0;
vd.ontimeupdate = function () {
  let curTime = Math.floor(vd.currentTime);
  if (curTime !== approxTime) {
    approxTime = curTime;
    if (approxTime >= startTime[0] && approxTime < startTime[1]) {
      caption.innerHTML = captions[0];
    } else if (approxTime >= startTime[1] && approxTime < startTime[2]) {
      caption.innerHTML = captions[1];
    } else if (approxTime >= startTime[2] && approxTime < startTime[3]) {
      caption.innerHTML = captions[2];
    } else if (approxTime >= startTime[3] && approxTime < startTime[4]) {
      caption.innerHTML = captions[3];
    } else if (approxTime >= startTime[4] && approxTime < startTime[5]) {
      caption.innerHTML = captions[4];
    } else if (approxTime >= startTime[5] && approxTime < startTime[6]) {
      caption.innerHTML = captions[5];
    } else if (approxTime >= startTime[6] && approxTime < startTime[7]) {
      caption.innerHTML = captions[6];
    } else if (approxTime >= startTime[7] && approxTime < 422) {
      caption.innerHTML = captions[7];
    } else if (approxTime >= 422) {
      caption.innerHTML = "";
    }
  }
};
