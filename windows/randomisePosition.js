$(document).ready(function(){
//    console.log(document.getElementById("drag-8").offsetWidth);
//    console.log(document.getElementById("drag-8").offsetHeight);
    // var height = document.body.scrollHeight;
    var width = document.body.scrollWidth;
    for(i=1; i<18; i++) {
        var offsetW = (document.getElementById("drag-"+i).offsetWidth) + 100;
        // var offsetH = (document.getElementById("drag-"+i).offsetHeight) + 80;
        document.getElementById("drag-"+i).style.left = (Math.random() * (width - offsetW)) + 'px';
        // document.getElementById("drag-"+i).style.top = (Math.random() * (height - offsetH)) + 'px';
        
    }

});