var visualW;
var visualH;
var bgmCircle = document.getElementById("spinCircle");
var bgmCircleR;
var bgmCircleTop;
var playing = false;
var bgm = document.getElementById("bgm");
var startCircle = document.getElementById("startCircle");
var vol = 1;

window.onload = function(){
  visualW = document.getElementById("visuals").clientWidth;
  visualH = document.getElementById("visuals").clientHeight;

  if (visualW < visualH){
    bgmCircleR = visualW - 200;
    bgmCircle.style.width = bgmCircle.style.height = bgmCircleR + "px";
  } else {
    bgmCircleR = visualH - 200;
    bgmCircle.style.width = bgmCircle.style.height = bgmCircleR + "px";
  }
  bgmCircleTop = (visualH - bgmCircleR)/2 - 50;
  // bgmCircleTop = (visualH - bgmCircleR)/2 - 100;
  bgmCircle.style.marginTop = bgmCircleTop + "px";
}

function startBGM() {
  if (bgm.paused == false) {
    bgm.pause();
    bgmCircle.style.animationPlayState = "paused";
    startCircle.style.animation = null;
  }else {
    bgm.play();
    bgmCircle.style.animation = "spin 3s infinite linear";
    startCircle.style.animation = "changeColor 1s forwards";
  }
  playing = !playing;
}

function volUp() {
  if (vol < 0.9){
    vol += 0.1;
  }else {
    vol = 1;
  }
  bgm.volume = vol;
  bgmCircle.style.width = bgmCircle.style.height = bgmCircleR*vol + "px";
  bgmCircle.style.opacity = vol;
}

function volDown() {
  if (vol > 0.1){
    vol -= 0.1;
  }else {
    vol = 0;
  }
  bgm.volume = vol;
  bgmCircle.style.width = bgmCircle.style.height = bgmCircleR*vol + "px";
  bgmCircle.style.opacity = vol;
}
