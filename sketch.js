var gamestate = 0;
var playerCount;
var database;
var canvas;
var intro,pc,game;
var allplayers;

function preload(){
    
}

function setup(){

canvas = createCanvas(displayWidth,displayHeight);
database = firebase.database();
game = new GameState();
game.getState();
game.start();

}

function draw(){

    if(playerCount===1){

        game.update(1);

    }
    if(gameState ===1){
        clear();
        game.play();
    }


}