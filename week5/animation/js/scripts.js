var colors = ["red","pink","blue","green","yellow","purple","orange","hotpink"]

window.onload = function(){
  for (var i = 0; i < 150; i++){
    var div = document.createElement("DIV");
    div.className = "circle";

    // giving the random size
    var size = Math.random() * 40 + 25 + "px";
    div.style.width = size;
    div.style.height = size;
    div.style.borderRadius = "50%";

    // giving the random color
    var colorNum = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = colors[colorNum];
    // div.style.backgroundColor = "red";

    // giving the random position
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";

    // making differet circles to fall at differe time
    div.style.animationDelay = Math.random()*5 + "s";

    // vibrating from left to right
    // var marginLeft = Math.random() * 100 +25;
    var marginLeft = 25;
    div.style.marginLeft = marginLeft + "px";

    document.body.append(div);
  }
}

var opacityValue = 0.5;
function changeTrans(val){
  var circles = document.getElementsByClassName("circle");
  if (val === 0){
    if (opacityValue < 1){
      opacityValue += 0.1;
    }
  } else if (val === 1){
    if (opacityValue > 0){
      opacityValue -= 0.1;
    }
  }
  for (var i = 0; i < 150; i++){
    circles[i].style.opacity = opacityValue;
  }
}
