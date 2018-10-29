// page variables
var totalPage = 7;
var pageRange = 1200;
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
// text variables
var textBox = document.getElementById("textBox");
var scrollDirection = 1;// 1 means down, 0 up
// intro window variables
var introWindow;
var intro;
var instruction1;
var instruction2;
// BGM variables
var openingTheme = document.getElementById("openingTheme");
var whiteNoise = document.getElementById("whiteNoise");
var environmental = document.getElementById("environmental");
  // to balance the volume among different audios
var baseVolumes = [1, 0.3, 1];
var volume = 0.6;
var volumeStep = 0.06;
var is1Playing = false;
var is2Playing = false;
var is3Playing = false;
var countPlaying = 0;
var soundList = [openingTheme, whiteNoise, environmental]
for (var i = 0; i < 3; i ++){
  soundList[i].volume = baseVolumes[i] * volume;
}

console.log("openingTheme volume: " + openingTheme.volume);

// START onload: change layouts *********************
window.onload = function(){
  // deciding total height for context box
  document.getElementById("contents").style.height = totalPage * pageRange + "px";
  console.log(document.getElementById("contents").style.height);
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
    bgmBtnMrgnT = bgmBtnR * 0.27;
    bgm1.style.width = bgm1.style.height = bgmBtnR + "px";
    bgm2.style.width = bgm2.style.height = bgmBtnR + "px";
    bgm3.style.width = bgm3.style.height = bgmBtnR + "px";
    bgm1.style.marginTop = bgmBtnMrgnT * 3 + "px";
    bgm2.style.marginTop = bgmBtnMrgnT + "px";
    bgm3.style.marginTop = bgmBtnMrgnT + "px";
  } else {
    bgmBtnR = visualH * 0.21;
    bgmBtnMrgnT = bgmBtnR * 0.27;
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

  // START intro page
  introWindow = document.createElement("div");
  introWindow.style.height = "100%";
  introWindow.style.width = "100%";
  introWindow.style.backgroundColor = "#17202A";
  introWindow.style.position = "absolute";
  introWindow.style.right = "0";
  introWindow.style.opacity = "0.9";
  introWindow.id = "introWindow";
  intro = document.createElement("div");
  intro.className = "text";
  intro.textAlign = "center";
  intro.id = "intro";
  intro.style.height = "60%";
  intro.style.width = "60%";
  intro.style.backgroundColor = "#253442";
  intro.style.position = "relative";
  intro.style.top = "20%";
  intro.style.left = "20%";
  intro.innerHTML = introText;
  var btn1 = document.createElement("button");
  btn1.addEventListener("click", btn1Function);
  btn1.innerHTML = "OK";
  btn1.id = "btn1";
  intro.appendChild(btn1);
  introWindow.append(intro);
  document.body.append(introWindow);
  // END introduction page
}
// intro page function
function btn1Function(e) {
  introWindow.removeChild(intro);
  // document.body.removeChild(introWindow);
  bgm1Function();
  document.getElementsByClassName("title")[0].innerHTML = "One Hundred Years of Solitude";
  introWindow.style.width = "80%";
  bgm1.style.backgroundColor = "#253442";
  textList = notNowTextList;
  // add instruction boxes
  instruction1 = document.createElement("div");
  instruction2 = document.createElement("div");
  instruction1.className = "instruction";
  instruction2.className = "instruction";
  instruction1.id = "instruction1";
  instruction2.id = "instruction2";
  instruction1.innerHTML = instruction1Text;
  instruction2.innerHTML = instruction2Text;
  introWindow.append(instruction1);
  introWindow.append(instruction2);
  // add the second button
  var btn2 = document.createElement("button");
  btn2.addEventListener("click", btn2Function);
  btn2.innerHTML = "START";
  btn2.id = "btn2";
  introWindow.append(btn2);
}
// instruction page function
function btn2Function(e) {
  document.body.removeChild(introWindow);
  textList = realTextList;
  // console.log(openingTheme);
  // console.log(openingTheme.currentTime);
  // openingTheme.src = "audio/OpeningTheme02.mp3";
  // console.log(openingTheme.currentTime);
  // openingTheme.play();
}
// END onload *********************

// START volume buttons *********************
volUp.addEventListener("click", volUpFunction);
function volUpFunction() {
  if (volume < 1 - volumeStep){
    volume += volumeStep;
  }else {
    volume = 1;
  }
  shadowHeight = (1 - volume) * volBarHeight;
  shadow.style.height = shadowHeight + "px";
  for (var i = 0; i < 3; i ++){
    soundList[i].volume = baseVolumes[i] * volume;
  }
}
volDown.addEventListener("click", volDownFunction);
function volDownFunction() {
  if (volume > volumeStep){
    volume -= volumeStep;
  }else {
    volume = 0;
  }
  shadowHeight = (1 - volume) * volBarHeight;
  shadow.style.height = shadowHeight + "px";
  for (var i = 0; i < 3; i ++){
    soundList[i].volume = baseVolumes[i] * volume;
  }
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
    whiteNoise.pause();
  } else {
    bgm2.style.animation = "changeColor1 1s forwards";
    countPlaying = countPlaying + 1;
    is2Playing = true;
    whiteNoise.play();
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
    environmental.pause();
  } else {
    bgm3.style.animation = "changeColor1 1s forwards";
    countPlaying = countPlaying + 1;
    is3Playing = true;
    environmental.play();
  }
  if (countPlaying == 0) {
    spinCircle.style.animationPlayState = "paused";
  } else {
    spinCircle.style.animation = "spin 5s infinite linear";
  }
}
// END play BGM buttons *********************

// START change page *********************
function scrollFunction(e) {
  var y = window.scrollY;
  var pageCount = Math.floor(y/pageRange);

  if (pageCount != pageNumber) {
    if (pageCount > pageNumber){
      scrollDirection = 1;
    } else {
      scrollDirection = 0;
    }
    // to change the text
    pageNumber = pageCount;
    var newText;
    var oldText;
    if (pageNumber == 0) {
      oldText = document.getElementsByClassName("text")[0];
      textBox.removeChild(oldText);
      newText = document.createElement("h1");
      newText.className = "title";
      newText.innerHTML = textList[pageNumber];
      textBox.append(newText);
    } else {
      if ((scrollDirection == 1) && (pageNumber == 1)){
        oldText = document.getElementsByClassName("title")[0];
      } else {
        oldText = document.getElementsByClassName("text")[0];
      }
      textBox.removeChild(oldText);
      newText = document.createElement("p");
      newText.className = "text";
      newText.innerHTML = textList[pageNumber];
      textBox.append(newText);
    }

    // to change the BGM
    // ************* codes *************
  }
}
function showScrollY() {
  var y = window.scrollY;
  console.log("Y: " + y);
}
// END change page *********************

var introText = "<br>This is an audible Internet novel<br>where environmental sounds and background music are added.<br><br>We suggest wearing headphones for better experience.<br><br>Since music will be played out<br>we would greatly appreciate it<br>if you check the volume level before starting it.<br><br><br>Click \"OK\" to start!<br><br>";
var instruction1Text = "<br>👈👈👈 On the left is the music control panel<br><br>&nbsp&nbsp&nbsp&nbsp&nbspClick circle button ⏺ to select sounds<br>&nbsp&nbsp&nbsp&nbsp&nbspClick triangle button 🔼🔽 to adjust volume<br><br>&nbsp&nbsp&nbsp&nbsp&nbspThere are 3 choices for sound<br>&nbsp&nbsp&nbsp&nbsp&nbspmusic, white noise, environmental sound<br>&nbsp&nbsp&nbsp&nbsp&nbspmusic and environmental sound are chosen by default";
var instruction2Text = "<br>&nbsp&nbsp&nbsp&nbsp&nbspThis grey area on the right contains the novel content<br><br>&nbsp&nbsp&nbsp&nbsp&nbspScroll down to next page<br><br><br><br>&nbsp👈👈👈Click the button to get started";
var textList = [" ", " ", " ", " ", " ", " ", " ", " "];
var notNowTextList = ["One Hundred Years of Solitude", " ", " ", " ", " ", " ", " ", " "];
var realTextList = ["One Hundred Years of Solitude",
"MANY YEARS LATER as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
"At that time Macondo was a village of twenty adobe houses, built on the bank of a river of clear water that ran along a bed of polished stones, which were white and enormous, like prehistoric eggs. The world was so recent that many things lacked names, and in order to indicate them it was necessary to point.",
"Every year during the month of March a family of ragged gypsies would set up their tents near the village, and with a great uproar of pipes and kettledrums they would display new inventions. First they brought the magnet. A heavy gypsy with an untamed beard and sparrow hands, who introduced himself as Melquíades, put on a bold public demonstration of what he himself called the eighth wonder of the learned alchemists of Macedonia.",
"He went from house to house dragging two metal ingots and everybody was amazed to see pots, pans, tongs, and braziers tumble down from their places and beams creak from the desperation of nails and screws trying to emerge, and even objects that had been lost for a long time appeared from where they had been searched for most and went dragging along in turbulent confusion behind Melquíades’ magical irons. “Things have a life of their own,” the gypsy proclaimed with a harsh accent. “It’s simply a matter of waking up their souls.”",
"José Arcadio Buendía, whose unbridled imagination always went beyond the genius of nature and even beyond miracles and magic, thought that it would be possible to make use of that useless invention to extract gold from the bowels of the earth. Melquíades, who was an honest man, warned him: “It won’t work for that.” But José Arcadio Buendía at that time did not believe in the honesty of gypsies, so he traded his mule and a pair of goats for the two magnetized ingots. Úrsula Iguarán, his wife, who relied on those animals to increase their poor domestic holdings, was unable to dissuade him. “Very soon well have gold enough and more to pave the floors of the house,” her husband replied.",
"For several months he worked hard to demonstrate the truth of his idea. He explored every inch of the region, even the riverbed, dragging the two iron ingots along and reciting Melquíades’ incantation aloud. The only thing he succeeded in doing was to unearth a suit of fifteenth- century armor which had all of its pieces soldered together with rust and inside of which there was the hollow resonance of an enormous stone-filled gourd. When José Arcadio Buendía and the four men of his expedition managed to take the armor apart, they found inside a calcified skeleton with a copper locket containing a woman’s hair around its neck."]
