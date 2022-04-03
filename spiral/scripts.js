$(function () {
  $("#black").delay(4500).fadeOut(7000);
  $("#about").delay(12000).fadeIn("slow");
});

var scene = new THREE.Scene();

var camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  1,
  1000
);

//     .PerspectiveCamera(
//   120,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   2000
// );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(
  new THREE.Color("hsl(30, 100%, 75%)"),
  1.0
);
keyLight.position.set(-500, 0, 80);

var fillLight = new THREE.DirectionalLight(
  new THREE.Color("hsl(240, 100%, 75%)"),
  0.75
);
fillLight.position.set(500, 0, 80);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(400, 0, -200).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var objectScale = 1.25;

var DObject, WObject, MObject, YObject, rings;

var clock = new THREE.Clock();

// var OBA;

var mtlLoader1 = new THREE.MTLLoader();
mtlLoader1.setPath("assets/");
mtlLoader1.load("day.mtl", function (materials) {
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath("assets/");
  objLoader.load("rings.obj", function (object) {
    object.position.y -= 140;
    object.scale.set(objectScale, objectScale, objectScale);
    scene.add(object);
    rings = object;
  });
  objLoader.load("day.obj", function (object) {
    object.position.y -= 140;
    object.scale.set(objectScale, objectScale, objectScale);
    scene.add(object);
    DObject = object;
  });
  objLoader.load("week.obj", function (object) {
    object.position.y -= 140;
    object.scale.set(objectScale, objectScale, objectScale);
    scene.add(object);
    WObject = object;
  });
  objLoader.load("month.obj", function (object) {
    object.position.y -= 140;
    object.scale.set(objectScale, objectScale, objectScale);
    scene.add(object);
    MObject = object;
  });
  objLoader.load("year.obj", function (object) {
    object.position.y -= 140;
    object.scale.set(objectScale, objectScale, objectScale);
    scene.add(object);
    YObject = object;
  });
});

function rotate() {
  // OBA.rotation.x += -0.0001;
  DObject.rotation.y += -0.005;
  WObject.rotation.y += -0.0025;
  MObject.rotation.y += -0.0005;
  YObject.rotation.y += -0.00025;
  // OBA.rotation.z += -0.00065;
}

var animate = function () {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  if (DObject && WObject && MObject && YObject && rings) {
    rotate();
  }
};

animate();
