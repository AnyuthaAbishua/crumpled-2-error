
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, paperIMG
var ground1
var box1, box2, box3

function preload()
{
	//paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground (400, 650, 800, 10);
	paper1 = new Paper (100,640,60);
	//paper1.addImage(paperIMG);
	box1=new Box (590,630,150,15);
	box2 = new Box (520, 590, 15, 100);
	box3 = new Box (670, 590, 15, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("green");

   ground1.display();
   paper1.display();
   box1.display();
   box2.display();
   box3.display();
  
   
  drawSprites();
 keyPressed();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:10, y:15})
	}

}


