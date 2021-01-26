const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone;
var ground, rubber, iron;

function setup() {
	createCanvas(1400, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(800, 260, 60, PI/4);
  hammer = new Hammer(400, 200);
  ground = new Ground(700, 630, 1400, 20);
  rubber = new Rubber(700, 200, 60, 60);
  iron = new Iron(600, 0);
  sand1 = new Sand(100, 100);
  sand2 = new Sand(230, 110);
  sand3 = new Sand(240, 120);
  sand4 = new Sand(250, 130);
  sand5 = new Sand(260, 140);
  sand6 = new Sand(270, 150);
  sand7 = new Sand(280, 160);
  sand8 = new Sand(290, 170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  stone.display();
  hammer.display();
  ground.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
 
  
}