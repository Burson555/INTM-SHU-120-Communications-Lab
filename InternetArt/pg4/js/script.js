var i;
var localTime;
var noFixedFilter = 1;

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
var infoPage = document.getElementById("infoPage");
var noFilter = document.getElementById("noFilter");
var fixFilter = document.getElementById("fixFilter");
var instruction = document.getElementById("instruction");
var buttonBox = document.getElementById("buttonBox");
var buttonText = document.getElementById("buttonText");
var infoPageIns = document.getElementById("infoPageIns");
var noFilterIns = document.getElementById("noFilterIns");
var fixFilterIns = document.getElementById("fixFilterIns");
var mask = document.getElementById("mask");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var bgm = document.getElementById("bgm");
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
  var side = (width - video.height * 16 / 9) / 6;
  infoPage.style.height = side + "px";
  infoPage.style.width = side + "px";
  infoPage.style.top = titleHeight + side/2 + "px";
  infoPage.style.right = side + "px";
  noFilter.style.height = side + "px";
  noFilter.style.width = side + "px";
  noFilter.style.top = titleHeight + 4*side/2 + "px";
  noFilter.style.right = side + "px";
  fixFilter.style.height = side + "px";
  fixFilter.style.width = side + "px";
  fixFilter.style.top = titleHeight + 7*side/2 + "px";
  fixFilter.style.right = side + "px";
  noFilter.addEventListener("click", removeFilter);
  fixFilter.addEventListener("click", fixFilterFunc);
  buttonBox.style.height = controlsHeight - 5 + "px";
  okBtt.addEventListener("click", okBttFunction);
  buttonText.style.bottom = controlsHeight + 15 + "px";
  infoPageIns.style.top = titleHeight + side + "px";
  noFilterIns.style.top = titleHeight + 2.5*side + "px";
  fixFilterIns.style.top = titleHeight + 4*side + "px";
  infoPageIns.style.right = 2.1*side + "px";
  noFilterIns.style.right = 2.1*side + "px";
  fixFilterIns.style.right = 2.1*side + "px";
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
video.addEventListener("click", clickFunc);
function clickFunc() {
  video.play();
  mask.style.height = video.height + "px";
  mask.style.width = video.height * 16 / 9 + "px";
  mask.style.top = titleHeight + "px";
  mask.style.left = (width - video.height * 16 / 9) / 2 + "px";
  mask.style.backgroundColor = "";
}
function removeFilter(){
  mask.style.backgroundColor = "";
  noFixedFilter = 1;
};
function fixFilterFunc(){
  noFixedFilter = 1 - noFixedFilter;
}
function okBttFunction(e) {
  document.body.removeChild(instruction);
  bgm.volume = 0.1;
  bgm.play();
}
// END layouts *********************


// START music and color functions *********************
function addFilter1(){if (noFixedFilter) {mask.style.backgroundColor = "#584A35";}};
function addFilter2(){if (noFixedFilter) {mask.style.backgroundColor = "#5F5245";}};
function addFilter3(){if (noFixedFilter) {mask.style.backgroundColor = "#6C6055";}};
function addFilter4(){if (noFixedFilter) {mask.style.backgroundColor = "#756353";}};
function addFilter5(){if (noFixedFilter) {mask.style.backgroundColor = "#8F7E69";}};
function addFilter6(){if (noFixedFilter) {mask.style.backgroundColor = "#A39B8B";}};
function addFilter7(){if (noFixedFilter) {mask.style.backgroundColor = "#887C5D";}};
function addFilter8(){if (noFixedFilter) {mask.style.backgroundColor = "#79694C";}};
function addFilter9(){if (noFixedFilter) {mask.style.backgroundColor = "#635245";}};
function MscAndFlt1(){ msc1.load(); msc1.play(); addFilter1();};
function MscAndFlt2(){ msc2.load(); msc2.play(); addFilter2();};
function MscAndFlt3(){ msc3.load(); msc3.play(); addFilter3();};
function MscAndFlt4(){ msc4.load(); msc4.play(); addFilter4();};
function MscAndFlt5(){ msc5.load(); msc5.play(); addFilter5();};
function MscAndFlt6(){ msc6.load(); msc6.play(); addFilter6();};
function MscAndFlt7(){ msc7.load(); msc7.play(); addFilter7();};
function MscAndFlt8(){ msc8.load(); msc8.play(); addFilter8();};
function MscAndFlt9(){ msc9.load(); msc9.play(); addFilter9();};
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
