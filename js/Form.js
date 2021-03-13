class Form {
  constructor() {
    this.input=createInput("ENTER YOUR NAME");
    this.button=createButton("LOG IN");
    this.greeting=createElement('h3');
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("SPACE  ATTACK  GAME !!");
    title.position(displayWidth/2-100, 0);
    
    this.input.position(displayWidth/2-100, displayHeight/2-100);
    this.button.position(displayWidth/2-70, displayHeight/2-10);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello Mr." + player.name )
      this.greeting.position(displayWidth/2-100, displayHeight/2-100);
    });

  }
}
