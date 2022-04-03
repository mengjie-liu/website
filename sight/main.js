$(function () {
  $.fn.disap = function () {
    var el = $(this);
    el.fadeOut(300000);
  };
  $.fn.stopDisap = function () {
    var el = $(this);
    el.stop().fadeIn(300);
  };
  // var dragarr = $(".draggable");
  setTimeout(function () {
    $("#welcome").fadeOut(500);
  }, 500);
  // setTimeout(function () {
  //   $("#welcome h3").css("filter", "blur(7px)");
  // }, 3000);
  $("#welcome").delay(500).fadeOut(1000);

  // $(".start").on("load", function () {
  //   $(this).fadeIn(2000);
  //   // $(this).css("dispale", "block");
  // });

  $("#street").on("load", function () {
    $(this).fadeIn(1500);
    // $(this).css("dispale", "block");
  });

  // $("#str").click(function () {
  //   // rand();
  //   $(this).fadeOut("slow");
  //   $("#home").fadeIn("slow");
  //   $(".start").fadeOut("slow");
  //   $("#street")
  //     .fadeIn(2000)
  //     .removeClass("hide")
  //     .addClass("current")
  //     .siblings("div")
  //     .fadeOut(2000)
  //     .removeClass("current")
  //     .addClass("hide");
  //   // $(".draggable").disap();
  // });
  // $("#home").click(function () {
  //   $(".start")
  //     .fadeIn(2000)
  //     .removeClass("hide")
  //     .addClass("current")
  //     .siblings("div")
  //     .fadeOut(2000)
  //     .removeClass("current")
  //     .addClass("hide");
  //   $(this).fadeOut(2000);
  //   $("#str").fadeIn(2000);
  // });

  $(".draggable").on("mouseenter", function () {
    if ($(this).find("#drag")) {
      $(this).find("#back").remove();
      // $(this).find("#up").remove();
      $(this).find("#drag").remove();
    }
    $(this)
      .append(function () {
        return `
        <div id='back'>
            <img src='img/back.png'>
        </div>
        <div id='drag'>
            <img src='img/drag.png'>
        </div>
        `;
      })
      .on("mouseleave", function () {
        $("#back").remove();
        // $("#up").remove();
        $("#drag").remove();
      });
    $("#back").css({
      left: 0,
      top: 0,
    });
    // $("#up").css({
    //   right: 0,
    //   top: 0,
    // });
    $("#drag").css({
      right: 0,
      bottom: 0,
    });
    $("#back").on("click", function () {
      $(this).parent(".draggable").stop().fadeOut("slow");
    });
    // $("#up").on("click", function () {
    //   let z = $(this).parent(".draggable").css("z-index");
    //   if ((z === "0") | (z === "auto")) {
    //     z = 1;
    //   } else {
    //     z = parseInt(z);
    //   }
    //   $(this)
    //     .parent(".draggable")
    //     .css("z-index", z + 1);
    // });
  });
  $(".draggable").resizable({
    handles: "se",
    create: function (event, ui) {
      $(".ui-resizable-se").css(
        "cursor",
        // "url(img/ribo.png) 35 32.5, se-resize"
        "se-resize"
      );
    },
  });

  // var a=1
  $(".draggable").draggable({
    containment: "window",
    scroll: false,
    // zindex: 80,
    stack: ".draggable",
    start: function (e, o) {
      // $(this).stopDisap();
      $(this).find("#back").remove();
      // $(this).find("#up").remove();
      $(this).find("#drag").remove();
      $(this)
        .css({
          // "z-index": a++,
          filter: "blur(0) saturate(0.05)",
        })
        .siblings()
        .css({
          filter: "blur(8px) saturate(0.75)",
          opacity: "0.85",
        });
      $(".icon").fadeOut();

      var srcname = $(this).attr("id");
      var idname = `${srcname}mv`;
      // var col;
      // if (srcname.match("^sh")) {
      //   col = "#4c754c";
      // } else if (srcname.match("^bj")) {
      //   col = "#5e5743";
      // } else if (srcname.match("^kt")) {
      //   col = "#404e63";
      // } else {
      //   col = "";
      // }

      var left = $(this).css("background-position-x");
      var top = $(this).css("background-position-y");

      if (this.querySelector(".mv")) {
        this.querySelector(".mv").play();
        // $(this).find(".colorb").fadeOut("fast");
        // if (!srcname.match("^nh")) {
        //   $(this).find(".mv").css({
        //     filter: "grayscale(0) brightness(95%)",
        //   });
        // }
      } else {
        $(this).append(function () {
          return `
        <video class="mv" id="${idname}">
        <source src="img/${srcname}.mp4" type="video/mp4">
        </video>
       `;
        });
        $(this).find(".mv").css({
          left: left,
          top: top,
          display: "none",
        });
        $(this).find(".mv").fadeIn("slow");
        this.querySelector(".mv").play();

        // $(this)
        //   .find(".colorb")
        //   .css({
        //     "background-color": `${col}`,
        //     "mix-blend-mode": "overlay",
        //     display: "none",
        //   });
        // if (!srcname.match("^nh")) {
        //   $(this).find(".mv").css({
        //     filter: "grayscale(0) brightness(95%)",
        //   });
        // }
      }
    },

    drag: function (e, o) {
      var dur = this.querySelector(".mv").duration;
      var sat = $(this).css("filter");
      console.log(sat);
      if ($(this).find("#drag")) {
        $(this).find("#back").remove();
        // $(this).find("#up").remove();
        $(this).find("#drag").remove();
      }
      $(this).css("background-position-x", -o.offset.left + "px");
      $(this).css("background-position-y", -o.offset.top + "px");
      $(this)
        .find(".mv")
        .css({
          left: -o.offset.left + "px",
          top: -o.offset.top + "px",
        });
      this.querySelector(".mv").onended = (event) => {
        $(this).fadeOut("slow");
      };
    },

    stop: function (e, o) {
      if ($(this).find("#drag")) {
        $(this).find("#back").remove();
        // $(this).find("#up").remove();
        $(this).find("#drag").remove();
      }
      $(this)
        .append(function () {
          return `
          <div id='back'>
          <img src='img/back.png'>
      </div>
        <div id='drag'>
            <img src='img/drag.png'>
        </div>
        `;
        })
        .on("mouseleave", function () {
          $("#back").remove();
          // $("#up").remove();
          $("#drag").remove();
        });
      $("#back").css({
        left: 0,
        top: 0,
      });
      // $("#up").css({
      //   right: 0,
      //   top: 0,
      // });
      $("#drag").css({
        right: 0,
        bottom: 0,
      });
      $("#back").on("click", function () {
        $(this).parent(".draggable").stop().fadeOut("slow");
      });
      // $("#up").on("click", function () {
      //   let z = $(this).parent(".draggable").css("z-index");
      //   if ((z === "0") | (z === "auto")) {
      //     z = 1;
      //   } else {
      //     z = parseInt(z);
      //   }
      //   $(this)
      //     .parent(".draggable")
      //     .css("z-index", z + 1);
      // });
      $(this)
        .css({
          // "z-index": "auto",
          filter: "blur(0px) saturate(0.75)",
        })
        .siblings()
        .css({
          // "z-index": "auto",
          filter: "blur(0px) saturate(0.75)",
          opacity: "1",
        });
      // $(this).find(".colorb").fadeIn("fast");

      this.querySelector(".mv").pause();
      this.querySelector(".mv").onended = (event) => {
        $(this).fadeOut("slow");
      };
      $(".icon").fadeIn();
      // $(this).disap();
      // if (!srcname.match("^nh")) {
      //   $(this).find(".mv").css("filter", "grayscale(75%) brightness(95%)");
      // }
    },
  });

  var rand = function () {
    const shuffled = dragarr.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 8);
    $(selected).fadeIn("slow");
    if (selected.length > 8) {
      selected = selected.slice(selected.length - 8, selected.length);
    }
    return selected;
  };
});
