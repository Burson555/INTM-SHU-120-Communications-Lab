function showAlert(){
  alert('Wowowowoowowowoow');
}


function aaa(){
  // this line is manditory
  console.log(document);
  document.getElementById('aaa').innerHTML = "gagaga";
}

function placeImage(){
  var x = event.clientX;
  var y = event.clientY;

  console.log("x: "+x+" y: "+y);

  var img = document.createElement("IMG");
  img.src = "images/aa.jpg";
  img.style.width = "20%";
  img.style.left = x;
  img.style.top = y;
  document.body.append(img);
}
