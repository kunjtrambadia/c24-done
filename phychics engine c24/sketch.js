const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var myEngine;

var myWorld;

var box,box1,ground;

function setup() {
  createCanvas(800,400);
  
myEngine = Engine.create()
myWorld = myEngine.world;



box = new Box (310,200,100,100);

box1 = new Box (300,250,50,50);

var color = "red";

ground = new Ground (color);

log  =  new Log (600,250,PI,300);



}

function draw() {
  background(255,255,200);  
Engine.update(myEngine)

box.boxDisplay ();

box1.boxDisplay ();

ground.groundDisplay ();


  
}