const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(width / 2, height, width, 20);
    hammer = new Driver(width / 6.5, plane.body.position.y - 110);
    ball = new Ball(width / 5.5, plane.body.position.y - 70, 15);

    console.log(hammer.body.collisionFilter.group);
    console.log(ball.body.collisionFilter.group);

    Engine.run(engine);
}

function draw(){

    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball.display();

    console.log(ball.body.position);

}