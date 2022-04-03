var container, controls;

var camera, scene, renderer;

var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var object;

var ratio;

var isMoblie = false;

if ($(window).width() <= 1050) {
  isMoblie = true;
}

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 50;

  scene = new THREE.Scene();
  scene.add(camera);

  function loadModel() {
    object.material = new THREE.MeshPhongMaterial({ color: 0x000000 });
    if (isMoblie == false) {
      object.position.x = 10;
      object.position.y = -2;
      object.rotateY(-0.9);
      object.scale.set(15, 15, 15);
    } else {
      object.position.y = -1;
      object.position.z = -10;
      object.rotateY(-0.5);
      object.scale.set(10, 10, 10);
    }
    scene.add(object);
  }

  var manager = new THREE.LoadingManager(loadModel);
  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log("model " + Math.round(percentComplete, 2) + "% downloaded");
    }
  }

  function onError() {}

  var loader = new THREE.OBJLoader(manager);

  if (isMoblie == false) {
    loader.load(
      "os/osht.obj",
      function (obj) {
        object = obj;
      },
      onProgress,
      onError
    );
  } else {
    loader.load(
      "os/osmbt.obj",
      function (obj) {
        object = obj;
      },
      onProgress,
      onError
    );
  }

  var canvas = document.querySelector("#c");
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  if (isMoblie == false) {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
  }
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  ratio = $(window).width() / $(window).height();
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  if (object) {
    object.rotation.y += 0.00225;
  }
  renderer.render(scene, camera);
}

if (isMoblie == false) {
  $("#c").after(`<div id="participants">
<a href="/"><span class="cuty">*&nbsp;</span>participants<span class="cuty">&nbsp;*</span></a>
</div>`);
  $("#c").after(`<div id="vist">
<a href="https://yaleschoolofart.viewingrooms.com"><span class="cuty">*&nbsp;</span>virtual studios<span class="cuty">&nbsp;*</span></a>
</div>`);
} else {
  $("#info").find(".space").remove();
  $("#c").css("z-index", "-1");
  $("#info").append(`
  <div id="participantsm">
  <a href="/"><span class="cuty">*&nbsp;</span>participants<span class="cuty">&nbsp;*</span></a>
  </div>
  <div id="vistm">
<a href="https://yaleschoolofart.viewingrooms.com"><span class="cuty">*&nbsp;</span>virtual&nbsp;studios<span class="cuty">&nbsp;*</span></a>
</div>
</br>
  `);
  $("#info").css("margin-bottom", "5%");
}

if (isMoblie == false) {
  $("#participants").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#back").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#vist").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#link").hover(
    function () {
      $(this).find(".cuty").css("visibility", "visible");
    },
    function () {
      $(this).find(".cuty").css("visibility", "hidden");
    }
  );
  $("#participants").on("click", function (e) {
    e.preventDefault();
    $("canvas").css("z-index", "-1");
    $("#first").css("display", "none");
    $("#second").css("display", "block");
    $(this).css("display", "none");
    $("#vist").css("display", "none");
    $("#back").css("display", "block");
  });

  $("#back").on("click", function (e) {
    e.preventDefault();
    $("#c").css("z-index", "10");
    $("#second").css("display", "none");
    $("#first").css("display", "block");
    $(this).css("display", "none");
    $("#vist").css("display", "block");
    $("#participants").css("display", "block");
    $("canvas").css("background-image", "none");
  });
  $(".name").hover(
    function () {
      $(".name").css("visibility", "hidden");
      $(this).css("visibility", "visible");
      $(this).find(".cuty").css("visibility", "visible");
      let id = $(this).attr("id");
      $("#c").css("background-image", `url("img/${id}.jpg")`);
    },
    function () {
      $(".name").css("visibility", "visible");
      $(this).find(".cuty").css("visibility", "hidden");
      $("canvas").css("background-image", "none");
    }
  );
} else {
  $("#participantsm").click(function (e) {
    e.preventDefault();
    $(document).scrollTop(0);
    $(this).find(".cuty").css("visibility", "visible");
    $("#back").find(".cuty").css("visibility", "hidden");
    $("#links").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
    $("canvas").css("z-index", "-1");
    $("#first").css("display", "none");
    $("#second").css("display", "block");
    $(this).css("display", "none");
    $("#back").css("display", "block");
    $(".Dps-list").find("#line").remove();
    // $("#second").prepend(`
    // <div id="link">
    // <a href="https://yaleschoolofart.viewingrooms.com"><span class="cuty">*&nbsp;</span>virtual&nbsp;studios<span class="cuty">&nbsp;*</span></a>
    // </div>
    // `);
    $(".Dps-list").css("top", "5%");
  });
  $("#back").click(function (e) {
    e.preventDefault();
    $(document).scrollTop(0);
    $("#second").css("display", "none");
    $("#first").css("display", "block");
    $(this).css("display", "none");
    $("#participantsm").css("display", "block");
    $("canvas").css("background-image", "none");
    $(this).find(".cuty").css("visibility", "visible");
    $("#links").find(".cuty").css("visibility", "hidden");
    $("#participantsm").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
  });
  $("#link").click(function () {
    $(this).find(".cuty").css("visibility", "visible");
    $("#participantsm").find(".cuty").css("visibility", "hidden");
    $("#back").find(".cuty").css("visibility", "hidden");
    $(".name").find(".cuty").css("visibility", "hidden");
  });
  $(".name").click(function (e) {
    e.preventDefault();
    $(".name").find(".cuty").css("visibility", "hidden");
    $("#participantsm").find(".cuty").css("visibility", "hidden");
    $("#back").find(".cuty").css("visibility", "hidden");
    $("#links").find(".cuty").css("visibility", "hidden");
    $(this).find(".cuty").css("visibility", "visible");
    let id = $(this).attr("id");
    $("#c").css("background-image", `url("img/${id}.jpg")`);
  });
}
