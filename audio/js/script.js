// general variables
var pageRange = 900;
var pageNumber = 0;
// spinning BGM circle variables
var bgmCircle = document.getElementById("spinCircle");
var bgmCircleR;
var visualW;
var visualH;
var bgmCircleMarginTop;
// BGM button variables
var bgm1 = document.getElementById("bgm1");
var bgm2 = document.getElementById("bgm2");
var bgm3 = document.getElementById("bgm3");
var bgmBtnR;
var bgmBtnMrgnT;
var bgmBtnMrgnL;
// volume button variables
var volUp = document.getElementById("volUp");
var volDown = document.getElementById("volDown");
var volWidth;
var volMargin;
var volMoveDown;
var volMoveLeft;
// volume bar variables
var volBar = document.getElementById("volBar");
var volBarWidth;
var volBarHeight;
var volBarMoveUp;
var volBarMoveRight;
var shadow = document.getElementById("shadow");
var shadowWidth;
var shadowHeight;
// BGM variables
var volume = 0.6;
var is1Playing = false;
var is2Playing = false;
var is3Playing = false;
var countPlaying = 0;
var openingTheme = document.getElementById("openingTheme");


// START onload: change layouts *********************
window.onload = function(){
  // START creating sipnning circle
  visualW = document.getElementById("controls").clientWidth;
  visualH = document.getElementById("controls").clientHeight;
  if (visualW < visualH){
    bgmCircleR = visualW * 0.32;
    bgmCircle.style.width = bgmCircle.style.height = bgmCircleR + "px";
  } else {
    bgmCircleR = visualH * 0.32;
    bgmCircle.style.width = bgmCircle.style.height = bgmCircleR + "px";
  }
  bgmCircleMarginTop = visualH * 0.05;
  bgmCircle.style.marginTop = bgmCircleMarginTop + "px";
  // END creating sipnning circle

  // START creating control buttons
  if (visualW < visualH){
    bgmBtnR = visualW * 0.21;
    bgmBtnMrgnT = bgmBtnR * 0.36;
    bgm1.style.width = bgm1.style.height = bgmBtnR + "px";
    bgm2.style.width = bgm2.style.height = bgmBtnR + "px";
    bgm3.style.width = bgm3.style.height = bgmBtnR + "px";
    bgm1.style.marginTop = bgmBtnMrgnT * 3 + "px";
    bgm2.style.marginTop = bgmBtnMrgnT + "px";
    bgm3.style.marginTop = bgmBtnMrgnT + "px";
  } else {
    bgmBtnR = visualH * 0.21;
    bgmBtnMrgnT = bgmBtnR * 0.32;
    bgm1.style.width = bgm1.style.height = bgmBtnR + "px";
    bgm2.style.width = bgm2.style.height = bgmBtnR + "px";
    bgm3.style.width = bgm3.style.height = bgmBtnR + "px";
    bgm1.style.marginTop = bgmBtnMrgnT + "px";
    bgm2.style.marginTop = bgmBtnMrgnT + "px";
    bgm3.style.marginTop = bgmBtnMrgnT + "px";
  }
  bgmBtnMrgnL = (visualW - bgmBtnR)/2;
  bgm1.style.marginLeft = bgmBtnMrgnL + "px";
  bgm2.style.marginLeft = bgmBtnMrgnL + "px";
  bgm3.style.marginLeft = bgmBtnMrgnL + "px";
  // END creating control buttons

  // START adjusting volume buttons
  volMoveDown = bgmBtnR * 0.5;
  volMoveLeft = bgmBtnR * 1.2;
  volWidth = bgmBtnR * 0.56;
  volMargin = bgmBtnR;
  volUp.style.borderWidth = volWidth + "px";
  volDown.style.borderWidth = volWidth + "px";
  volUp.style.margin = volMargin + "px auto";
  volDown.style.margin = volMargin + "px auto";
  volUp.style.top = volMoveDown + "px";
  volDown.style.top = volMoveDown + "px";
  volUp.style.right = volMoveLeft + "px";
  volDown.style.right = volMoveLeft + "px";
  // END adjusting volume buttons

  // START creating volume bar
  volBarWidth = bgmBtnR * 1.5;
  volBar.style.width = volBarWidth + "px";
  volBarHeight = (volMargin + volWidth) * 1.5;
  volBar.style.height = volBarHeight + "px";
  shadowWidth = volBarWidth;
  shadowHeight = 0.4 * volBarHeight;
  shadow.style.width = shadowWidth + "px";
  shadow.style.height = shadowHeight + "px";
  volBarMoveRight = volBarWidth * 1.7;
  volBar.style.left = volBarMoveRight + "px";
  volBarMoveUp = volBarHeight * 1.44;
  volBar.style.bottom = volBarMoveUp + "px"
  // END creating volume bar

  // openingTheme.play();
}
// END onload *********************


// START volume buttons *********************
volUp.addEventListener("click", volUpFunction);
function volUpFunction() {
  if (volume < 0.9){
    volume += 0.1;
  }else {
    volume = 1;
  }
  shadowHeight = (1 - volume) * volBarHeight;
  shadow.style.height = shadowHeight + "px";
}
volDown.addEventListener("click", volDownFunction);
function volDownFunction() {
  if (volume > 0.1){
    volume -= 0.1;
  }else {
    volume = 0;
  }
  shadowHeight = (1 - volume) * volBarHeight;
  shadow.style.height = shadowHeight + "px";
}
// END volume buttons *********************

// START play BGM buttons *********************
bgm1.addEventListener("click", bgm1Function);
function bgm1Function() {
  if (is1Playing) {
    bgm1.style.animation = "changeColor2 1s forwards";
    countPlaying = countPlaying - 1;
    is1Playing = false;
    openingTheme.pause();
  } else {
    bgm1.style.animation = "changeColor1 1s forwards";
    countPlaying = countPlaying + 1;
    is1Playing = true;
    openingTheme.play();
  }
  if (countPlaying == 0) {
    spinCircle.style.animationPlayState = "paused";
  } else {
    spinCircle.style.animation = "spin 5s infinite linear";
  }
}
bgm2.addEventListener("click", bgm2Function);
function bgm2Function() {
  if (is2Playing) {
    bgm2.style.animation = "changeColor2 1s forwards";
    countPlaying = countPlaying - 1;
    is2Playing = false;
  } else {
    bgm2.style.animation = "changeColor1 1s forwards";
    countPlaying = countPlaying + 1;
    is2Playing = true;
  }
  if (countPlaying == 0) {
    spinCircle.style.animationPlayState = "paused";
  } else {
    spinCircle.style.animation = "spin 5s infinite linear";
  }
}
bgm3.addEventListener("click", bgm3Function);
function bgm3Function() {
  if (is3Playing) {
    bgm3.style.animation = "changeColor2 1s forwards";
    countPlaying = countPlaying - 1;
    is3Playing = false;
  } else {
    bgm3.style.animation = "changeColor1 1s forwards";
    countPlaying = countPlaying + 1;
    is3Playing = true;
  }
  if (countPlaying == 0) {
    spinCircle.style.animationPlayState = "paused";
  } else {
    spinCircle.style.animation = "spin 5s infinite linear";
  }
}
// END play BGM buttons *********************

function showScrollPosition() {

  var y = window.scrollY;
  var pageCount = Math.floor(y/pageRange);
  console.log("Y: " + y);
  console.log("pageCount: " + pageCount);

  if (pageCount != pageNumber) {
    pageNumber = pageCount;
  }

}
