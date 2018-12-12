var i;

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
var video = document.getElementById("video");
var links = document.getElementsByClassName("link");
// links.style.height = "20%";


// START layouts *********************
window.onload = function(){
  title.style.width = width + "px";
  videoContainer.style.width = width + "px";
  title.style.height = titleHeight + "px";
  videoContainer.style.height = videoContainerHeight + "px";
  video.height = videoContainerHeight + 1;
}
// END layouts *********************
