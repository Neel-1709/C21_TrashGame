
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var wall1
var wall2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	isStatic: false,
	restitution: 0.1,
	friction: 0,
    density: 1.2
}
var ground_options ={
	isStatic: true
  };
  ball = Bodies.circle(100,50,10,ball_options);
  World.add(world,ball);
  wall1 = Bodies.rectangle(560,650,10,80,ground_options);
  World.add(world,wall1);
  wall2 = Bodies.rectangle(650,650,10,80,ground_options);
  World.add(world,wall2);

 ground = Bodies.rectangle(400,700,800,20,ground_options);
 World.add(world,ground);
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,800,20);
  rect(wall1.position.x,wall1.position.y,10,80);
  rect(wall2.position.x,wall2.position.y,10,80);
  drawSprites();
 
}

function keyPressed()
{
  
    if(keyCode ===RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:3});
	}
	if(keyCode ===LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-3,y:-3});
	}
}
