var i;
var localTime;

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


// START music and color functions *********************
function addFilter1(){video.style.filter = "hue-rotate(30deg)";};
function addFilter2(){video.style.filter = "hue-rotate(36deg)";};
function addFilter3(){video.style.filter = "hue-rotate(29deg)";};
function addFilter4(){video.style.filter = "hue-rotate(28deg)";};
function addFilter5(){video.style.filter = "hue-rotate(33deg)";};
function addFilter6(){video.style.filter = "hue-rotate(40deg)";};
function addFilter7(){video.style.filter = "hue-rotate(43deg)";};
function addFilter8(){video.style.filter = "hue-rotate(39deg)";};
function addFilter9(){video.style.filter = "hue-rotate(45deg)";};
function MscAndFlt1(){ msc1.play(); addFilter1();};
function MscAndFlt2(){ msc2.play(); addFilter2();};
function MscAndFlt3(){ msc3.play(); addFilter3();};
function MscAndFlt4(){ msc4.play(); addFilter4();};
function MscAndFlt5(){ msc5.play(); addFilter5();};
function MscAndFlt6(){ msc6.play(); addFilter6();};
function MscAndFlt7(){ msc7.play(); addFilter7();};
function MscAndFlt8(){ msc8.play(); addFilter8();};
function MscAndFlt9(){ msc9.play(); addFilter9();};
function keyPressFunc(){
  var x = event.key;
  switch (x) {
    case "a": MscAndFlt1(); break;
    case "s": MscAndFlt2(); break;
    case "d": MscAndFlt3(); break;
    case "f": MscAndFlt4(); break;
    case "g": MscAndFlt5(); break;
    case "h": MscAndFlt6(); break;
    case "j": MscAndFlt7(); break;
    case "k": MscAndFlt8(); break;
    case "l": MscAndFlt9(); break;
    default:
      break;
  }
};
document.body.addEventListener("keypress", keyPressFunc);
// box1.addEventListener("mouseover", musicFunc1);
// box2.addEventListener("mouseover", musicFunc2);
// box3.addEventListener("mouseover", musicFunc3);
// box4.addEventListener("mouseover", musicFunc4);
// box5.addEventListener("mouseover", musicFunc5);
// box6.addEventListener("mouseover", musicFunc6);
// box7.addEventListener("mouseover", musicFunc7);
// box8.addEventListener("mouseover", musicFunc8);
// box9.addEventListener("mouseover", musicFunc9);
box1.addEventListener("mouseover", addFilter1);
box2.addEventListener("mouseover", addFilter2);
box3.addEventListener("mouseover", addFilter3);
box4.addEventListener("mouseover", addFilter4);
box5.addEventListener("mouseover", addFilter5);
box6.addEventListener("mouseover", addFilter6);
box7.addEventListener("mouseover", addFilter7);
box8.addEventListener("mouseover", addFilter8);
box9.addEventListener("mouseover", addFilter9);
// END music and color functions *********************
