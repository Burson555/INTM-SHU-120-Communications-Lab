var imageValue;
var sound1 = document.getElementById("aaa");
var sound2 = document.getElementById("bbb");
var BGMusic = document.getElementById("BGM");
var hasImg = false;


function placeImage(){

  var x = event.clientX;
  var y = event.clientY;
  console.log("x: "+x+" y: "+y);

  var img = document.createElement("IMG");


  if (imageValue === "kevin"){
    img.src = "img/aa.jpg";
    img.style.width = "20px";
    sound1.load();
    sound1.play();
  }
  else if (imageValue === "scream") {
    img.src = "img/bb.jpg";
    img.style.width = "20px";
    sound2.load();
    sound2.play();
  }

  img.style.left = x + "px";
  img.style.top = y + "px";
  document.body.append(img);

  if (hasImg == true){
    removeImg();
  } else {
    hasImg = true;
  }
}

function setImage(value){
  imageValue = value;
}

function removeImg() {
  var oI = document.body.getElementsByTagName("img")[0];
  document.body.removeChild(oI);
        }

function playBGM(){
  if (BGMusic.paused == true){
    BGMusic.play();
  }
  else {
    BGMusic.pause();
  }
  document.body.getElementsByTagName("img")[0].style.left = "0px";
  document.body.getElementsByTagName("img")[0].style.top = "0px";
}
