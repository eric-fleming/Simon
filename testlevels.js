var boxes = document.getElementsByClassName("sector");

var redbox = boxes[0];
var greenbox = boxes[1];
var bluebox = boxes[2];
var yellowbox = boxes[3];

redbox.onclick = function(){
  flicker(,'','');
  setTimeout(function(){flicker(,'','')},500);
}

greenbox.onclick = function(){
  flicker(,'','');
  setTimeout(function(){flicker(,'','')},500);
}

bluebox.onclick = function(){
  flicker(,'','');
  setTimeout(function(){flicker(,'','')},500);
}

yellowbox.onclick = function(){
  flicker(,'','');
  setTimeout(function(){flicker(,'','')},500)
}

function flicker(object,light,dark){
  object.classList.toggle();
  object.classList.toggle();

};

var levels = document.getElementsByTagName("button");
var LevelOneButton = levels[0];
var LevelTwoButton = levels[1];
var LevelThreeButton = levels[2];
var LevelFour = levels[3];

LevelOneButton.onclick = function(){
  levelone();
};

LevelTwoButton.onclick = function(){
  leveltwo();
};

LevelThreeButton.onclick = function(){
  levelthree();
};

LevelFourButton.onclick = function(){
  levelfour();
};
function levelone(){
.click();
setTimeout(function(){},750);
setTimeout(function(){},1500);
setTimeout(function(){},2250);
setTimeout(function(){},3000);
setTimeout(function(){},3750);
}

function leveltwo(){


}


function levelthree(){


}

function levelfour(){

  
}
