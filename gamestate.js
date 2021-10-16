class GameState{

constructor(){

}

getState(){

var gsr = database.ref('gameState');
gsr.on("value",function(data){
    gameState = data.val();
});

}

update(state){

    database.ref('/').update({
        gameState : state
    });

}

async start(){
    
    if(gameState ===0){

     player = new Player();
     var pcr = await  database.ref('playerCount').once("value");
     if(pcr.exists()){
         playerCount = pcr.val();
         player.getCount();
     }

     intro = new Intro()
     intro.display();

    }
      


}

play(){

 intro.hide();
 Player.getPcInfo()

drawSprites();
}

    



}