/* ************** START BGM ****************** */
var BGM1 = document.getElementById("BGM1");
var BGM2 = document.getElementById("BGM2");
var BGM3 = document.getElementById("BGM3");
var BGM4 = document.getElementById("BGM4");
function play1(){
  if (BGM1.paused == true){
      BGM1.load();
      BGM1.play();
      if (BGM2.paused == false){
        BGM2.pause();
      }
      if (BGM3.paused == false){
        BGM3.pause();
      }
      if (BGM4.paused == false){
        BGM4.pause();
      }
    }
    else {
      BGM1.pause();
    }
}
function play2(){
  if (BGM2.paused == true){
      BGM2.load();
      BGM2.play();
      if (BGM1.paused == false){
        BGM1.pause();
      }
      if (BGM3.paused == false){
        BGM3.pause();
      }
      if (BGM4.paused == false){
        BGM4.pause();
      }
    }
    else {
      BGM2.pause();
    }
}
function play3(){
  if (BGM3.paused == true){
      BGM3.load();
      BGM3.play();
      if (BGM2.paused == false){
        BGM2.pause();
      }
      if (BGM1.paused == false){
        BGM1.pause();
      }
      if (BGM4.paused == false){
        BGM4.pause();
      }
    }
    else {
      BGM3.pause();
    }
}
function play4(){
  if (BGM4.paused == true){
      BGM4.load();
      BGM4.play();
      if (BGM2.paused == false){
        BGM2.pause();
      }
      if (BGM1.paused == false){
        BGM1.pause();
      }
      if (BGM3.paused == false){
        BGM3.pause();
      }
    }
    else {
      BGM4.pause();
    }
}
/* ************** END BGM ****************** */

// *************** START swim Function ***************
var swimPosition = 2;
var hasImg = false;
function swim(){

  var x = event.clientX;
  var y = event.clientY;
  console.log("x: "+x+" y: "+y);

  var img = document.createElement("IMG");
  swimPosition = 3 - swimPosition;
  img.src = "img/swim" + swimPosition + ".png";
  img.style.width = "80px";
  img.className = "temp";

  img.style.left = x - 40 + "px";
  img.style.top = y - 60 + "px";
  document.body.append(img);

  if (hasImg == true){
  removeImg();
  } else {
  hasImg = true;
  }
}

function removeImg() {
  var oI = document.body.getElementsByClassName("temp")[0];
  document.body.removeChild(oI);
}
// *************** END swim Function ***************

function showPosition(){
  // this function only workds inside div
  var x = event.clientX;
  var y = event.clientY;
  console.log("x: "+x+" y: "+y);
  }
