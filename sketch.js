var db;
var gameState = 0;
var playerCount;
var f;
var p;
var g;
var allPlayer;
var distance = 0;

function setup(){
    db = firebase.database(); 
    createCanvas(1200,500);
    g = new game();
    g.getState();
    g.start();
    
   }

function draw(){
    background("white");
    if(playerCount == 4){
        g.update(1);

}
if(gameState == 1){
  clear();
  g.play();
}

  }


