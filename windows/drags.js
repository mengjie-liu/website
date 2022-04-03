// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
          event.dy * event.dy) | 0) + 'px');
    }
  });

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);

}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;


// interact('#drag-1')
//   .on('tap', function (event) {
//     window.location.href = '/locationhistory/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });

// interact('#drag-2')
//   .on('tap', function (event) {
//     window.location.href = '/idolaspecus/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });

// interact('#drag-3')
//   .on('tap', function (event) {
//     window.location.href = '/garnethill/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });

// interact('#drag-4')
//   .on('tap', function (event) {
//     window.location.href = '/type3/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });

// interact('#drag-5')
//   .on('tap', function (event) {
//     window.location.href = '/healthymachines/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-6')
//   .on('tap', function (event) {
//     window.location.href = '/talkingmachines/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-7')
//   .on('tap', function (event) {
//     window.location.href = '/darkpool/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-8')
//   .on('tap', function (event) {
//     window.location.href = '/fruitfulfruits/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-9')
//   .on('tap', function (event) {
//     window.location.href = '/RGBPlay/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-10')
//   .on('tap', function (event) {
//     window.location.href = '/zinemachines/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-11')
//   .on('tap', function (event) {
//     window.location.href = '/hackers/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });
// interact('#drag-12')
//   .on('tap', function (event) {
//     window.location.href = '/vdnkh/';
//     // event.currentTarget.classList.toggle('switch-bg');
//     event.preventDefault();
//     console.log("you tapped!");
//   });