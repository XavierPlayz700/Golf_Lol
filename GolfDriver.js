class Driver {
  constructor(x, y) {
    var options = {
      density : 4,
      friction : 1.0,
      restitution : 0.5,
      isStatic : true
    }

    this.body = Bodies.rectangle(x, y, 200, 20, options);
    this.width = 200;
    this.height = 20;
    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;

    var angle = this.body.angle;
    angle = mouseX;
    angle -= mouseY;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  }

}
