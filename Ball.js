class Ball {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	    var options = {
			restitution : 0.3,
			friction : 1.0,
			density : 1.0,
		}

		this.x = x;
		this.y = y;
		this.r = r;

		this.body = Bodies.circle(this.x, this.y, this.r, options)
		// var lol = this.body;
		World.add(world, this.body);

		this.image = loadImage("Ball.png");
	}

	display()
	{
			var rubberpos = this.body.position;		
			var rubberang = this.body.angle;

			push();
			translate(rubberpos.x, rubberpos.y);
			rotate(rubberang);
			// imageMode(CENTER);
			// image(this.image, 0, 0, this.r, this.r);
			ellipse(0, 0, this.r * 2);
			pop();

	}

}
