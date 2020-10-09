const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint

var engine,world;
var Bob1,rope1;
function setup() {
  createCanvas(700, 700);
  engine= Engine.create();
  world= engine.world;

  bob1= new Bob(500,200,100,100)
  rope1= new Rope(bob1.body,{x: 200,y:200});

  bob2= new Bob(700,200,100,100)
  rope2= new Rope(bob2.body,{x: 340,y:200});

  bob3= new Bob(900,200,100,100)
  rope3= new Rope(bob3.body,{x: 400,y:10});



  Engine.run(engine);

}

function draw() {
  background("black");
  Engine.update(engine);
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

}

function mouseDragged(){

Matter.Body.setPosition(bob1.body,{x: mouseX,y:mouseY});



}