var number = 1;

function play_ani() {
  if (number == 0){
    img0();
  }
  else if (number == 1){
    img1();
  }
  else {
    img2();
  }
}

function img0(){
  document.getElementById("img0").style.opacity = "1";
  document.getElementById("img1").style.opacity = "0.1";
  document.getElementById("img2").style.opacity = "0.1";

  number = number + 1;
}

function img1(){
  document.getElementById("img1").style.opacity = "1";
  document.getElementById("img2").style.opacity = "0.1";
  document.getElementById("img0").style.opacity = "0.1";

  number = number + 1;
}

function img2(){
  document.getElementById("img2").style.opacity = "1";
  document.getElementById("img1").style.opacity = "0.1";
  document.getElementById("img0").style.opacity = "0.1";

  number = 0;
}
