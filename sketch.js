
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	var ball_options={
		isstatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	leftSide = new Ground(1100,600,20,120);

	//Create the Bodies Here.
	ball=Bodies.circle(200,200,30,ball_options)
    World.add(world,ball)
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){

	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Ground.display();

  drawSprites();
 
}



