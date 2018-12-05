var i;

// page layouts
var width = window.innerWidth;
var titleHeight = window.innerHeight * 0.1;
var videoWidthRatio = 0.7;
var videoWidth = videoWidthRatio * width;
var videoHeightWidthRatio = 9/16;
var videoContainerHeight = videoWidth * videoHeightWidthRatio;
var controlsHeight = window.innerHeight - titleHeight - videoContainerHeight;
var boxWidth = window.innerWidth/25;
var boxHeight = controlsHeight * 0.6;
var boxMarginTopRatio = 0.16;

// variables
var title = document.getElementById("title");
var videoContainer = document.getElementById("videoContainer");
var controls = document.getElementById("controls");
var video = document.getElementById("video");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var msc1 = document.getElementById("msc1");
var msc2 = document.getElementById("msc2");
var msc3 = document.getElementById("msc3");
var msc4 = document.getElementById("msc4");
var msc5 = document.getElementById("msc5");
var msc6 = document.getElementById("msc6");
var msc7 = document.getElementById("msc7");
var msc8 = document.getElementById("msc8");
var msc9 = document.getElementById("msc9");


// START layouts *********************
window.onload = function(){
  title.style.width = width + "px";
  videoContainer.style.width = width + "px";
  controls.style.width = width + "px";
  title.style.height = titleHeight + "px";
  videoContainer.style.height = videoContainerHeight + "px";
  controls.style.height = controlsHeight + "px";
  video.height = videoContainerHeight + 1;
  var box = document.getElementsByClassName("box");
  for (i = 0; i < 9; i++) {
    if (i == 0) {
      box[i].style.width = boxWidth + "px";
      box[i].style.height = boxHeight + "px";
      box[i].style.marginTop = boxMarginTopRatio * controlsHeight + "px";
      box[i].style.marginLeft = 4 * boxWidth + "px";
    } else {
      box[i].style.width = boxWidth + "px";
      box[i].style.height = boxHeight + "px";
      box[i].style.marginTop = boxMarginTopRatio * controlsHeight + "px";
      box[i].style.marginLeft = boxWidth + "px";
    }
  }
}
// END layouts *********************


// START box hover *********************
box1.addEventListener("mouseover", musicFunc1);
box2.addEventListener("mouseover", musicFunc2);
box3.addEventListener("mouseover", musicFunc3);
box4.addEventListener("mouseover", musicFunc4);
box5.addEventListener("mouseover", musicFunc5);
box6.addEventListener("mouseover", musicFunc6);
box7.addEventListener("mouseover", musicFunc7);
box8.addEventListener("mouseover", musicFunc8);
box9.addEventListener("mouseover", musicFunc9);
function musicFunc1(){console.log(1);};
function musicFunc2(){console.log(2);};
function musicFunc3(){console.log(3);};
function musicFunc4(){console.log(4);};
function musicFunc5(){console.log(5);};
function musicFunc6(){console.log(6);};
function musicFunc7(){console.log(7);};
function musicFunc8(){console.log(8);};
function musicFunc9(){console.log(9);};
// END box hover *********************

// START keypress *********************
document.body.addEventListener("keypress", keyPressFunc);
function keyPressFunc(){
  var x = event.key;
  switch (x) {
    case "a": console.log(1); break;
    case "s": console.log(2); break;
    case "d": console.log(3); break;
    case "f": console.log(4); break;
    case "g": console.log(5); break;
    case "h": console.log(6); break;
    case "j": console.log(7); break;
    case "k": console.log(8); break;
    case "l": console.log(9); break;
    default:
      break;
  }
};
// END keypress *********************
