class form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(130, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        p.name = this.input.value();
        playerCount+=1;
        p.index = playerCount;
        p.update();
        p.updateCount(playerCount);
        this.greeting.html("Hello " + p.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  