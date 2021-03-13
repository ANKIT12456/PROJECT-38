class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(300,400);
    car2=createSprite(500,400);
    car3=createSprite(700,400);
    car4=createSprite(900,400);
    cardata=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    textSize(25);
    text("GAME START",200,100);

    Player.getPlayersInfo();

    if(allplayers !== undefined){
      //var player_pos=130;
      var index=0,x=0,y;
      for(var i in allplayers){
        index++;
        x+=200;
        y=displayHeight-allplayers[i].distance;
        cardata[index-1].x=x;
        cardata[index-1].y=y;
        if(index === player.index){
          cardata[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cardata[index-1].y;
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance+=25;
      player.update(player.distance);
    }
    drawSprites();
  }
}
