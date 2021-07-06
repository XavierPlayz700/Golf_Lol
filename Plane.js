class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction : 0.75
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y - 3, this.width, this.height + 10);
    }

  }