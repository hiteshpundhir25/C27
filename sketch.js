const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var wall;
var rope1,rope2,rope3,rop4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,450);
	bob2 = new Bob(450,450);
	bob3 = new Bob(500,450);
	bob4 = new Bob(300,450);
	bob5 = new Bob(350,450);
	wall = new Roof(400,50,500,50);
	rope1 = new Rope(bob1.body,wall.body,0,0);
	rope2 = new Rope(bob2.body,wall.body,60,0);
	rope3 = new Rope(bob3.body,wall.body,110,0);
	rope4 = new Rope(bob4.body,wall.body,-110,0);
	rope5 = new Rope(bob5.body,wall.body,-60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  wall.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  keyPressed();

  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob3.body, bob5.body.position,{x:7,y:-7});
	 }
   }


