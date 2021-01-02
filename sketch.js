const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(350,100,300,30);
	World.add(world,roof);

	ball1=new Bob(250,300);
	ball2=new Bob(300,300);
	ball3=new Bob(350,300);
	ball4=new Bob(400,300);
	ball5=new Bob(450,300);

	rope1=new Chain(ball1.body,roof.body,-100,0) 
	World.add(world,rope1)

	rope2=new Chain(ball2.body,roof.body,-50,0)
	World.add(world,rope2)

	rope3=new Chain(ball3.body,roof.body,0,0)
	World.add(world,rope3)

	rope4=new Chain(ball4.body,roof.body,+50,0)
	World.add(world,rope4)

	rope5=new Chain(ball5.body,roof.body,+100,0)
	World.add(world,rope5)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 drawSprite()
 }

function  keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0})
	}
}


