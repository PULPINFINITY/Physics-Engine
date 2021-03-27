const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var object,ground

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var prop2 = {
    restitution:1.2
  }
  object = Bodies.rectangle(30,200,50,50,prop2);
  World.add(world,object)
  var prop = {
  isStatic:true
  }

  ground = Bodies.rectangle(400,350,800,20,prop);
  World.add(world,ground)
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,800,20)

  
  drawSprites();
}

