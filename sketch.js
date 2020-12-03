
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;
var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	bob1=new bob(200,450,40);
	bob2=new bob(240,450,40);
	bob3=new bob(280,450,40);
	bob4=new bob(320,450,40);
	bob5=new bob(360,450,40);

	roof1=new roof(280,250,300,40);

	rope1=new Rope(bob1.body,roof1.body,-100,0);
	rope2=new Rope(bob2.body,roof1.body,-60,0);
	rope3=new Rope(bob3.body,roof1.body,-20,0);
	rope4=new Rope(bob4.body,roof1.body,20,0);
	rope5=new Rope(bob5.body,roof1.body,60,0);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
bob1.display();
bob2.display();
bob3.display();
bob4.display(); 
bob5.display(); 
  
  roof1.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:65});
	 }
	 if (keyCode === UP_ARROW && bob1.x===200 ) {
   
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-65});
	
	  }
}





