class PC{

 constructor(){
     this.name = null;
     this.index = null;
 }

 getCount(){

 var pcr = database.ref('playerCount');
 pcr.on("value",(data)=>{
     playerCount = data.val();
 })

 }

 updateCount(count){
     database.ref('/').update({
         playerCount : count
     })
 }
 
 update(){
    var playerIndex ="players/player"+ this.index;
    database.ref(playerIndex).set({
        name : this.name
    })
 }

 static getPcInfo(){

   var pcir =   database.ref('players');
   pcir.on("value",(data)=>{
       allplayers = data.val();
   })
       

 }

}