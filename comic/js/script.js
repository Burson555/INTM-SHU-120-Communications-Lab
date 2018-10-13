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

// *************** START treasure pop up ***************
var colors = ["red","hotpink","blue","green","yellow","purple"];
function treasure(){
  for (var i = 0; i < 80; i++){
    var div = document.createElement("DIV");
    div.className = "coin";

    // giving the random size
    var size = Math.random() * 40 + 25;
    div.style.width = (size + 1) + "px";
    div.style.height = (size + 1) + "px";
    div.style.borderRadius = "50%";

    // inserting the coin photo
    var img = document.createElement("IMG");
    img.style.width = size + "px";
    img.src = "img/coin.png";
    // div.backgroundImage = img;
    div.append(img);

    // giving the random color
    var colorNum = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = colors[colorNum];
    // div.style.backgroundColor = "red";

    // giving the random position
    div.style.left = Math.random() * window.innerWidth * 0.9 + "px";
    div.style.top = Math.random() * window.innerHeight + 100 + "px";

    // making differet circles to fall at differe time
    div.style.animationDelay = Math.random()*5 + "s";

    // vibrating from left to right
    // var marginLeft = Math.random() * 100 +25;
    var marginLeft = 25;
    div.style.marginLeft = marginLeft + "px";

    document.getElementById("box4").append(div);
  }
}
// *************** END treasure pop up ***************

// *************** START click eye and pop up image ***************
var counter = 1;
function sparkling(){
  if (counter == 1) {
    var newImg = document.createElement("IMG");
    newImg.src = "img/eye.png";
    newImg.className = "sparkling";
    document.getElementById ("page3").appendChild(newImg);
    counter = counter - 1;
  }
}
function showimage(){
  document.getElementById("sparkling");
  document.body.append(sparkling);
}
// *************** END click eye and pop up image ***************
