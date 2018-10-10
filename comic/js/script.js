function showAlert(){
  alert('Wowowowoowowowoow');
}


function nextPage(){
  var haha = document.body.getElementsByClassName("page");
  console.log(haha);
  console.log(haha[0]);
  // document.getElementsByClassName("page").style.backgroundImage = "url('img/pg2_120.png')";
}

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
  var oI = document.body.getElementsByTagName("img")[0];
  document.body.removeChild(oI);
        }
// *************** END swim Function ***************

function showPosition(){
  // this function only workds inside div
  var x = event.clientX;
  var y = event.clientY;
  console.log("x: "+x+" y: "+y);
  console.log("9" - 1);
  console.log("Hello"[2]);
  console.log(document.getElementById('iii').value);
  }
