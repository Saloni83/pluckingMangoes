
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1032,125,30);
	mango3=new mango(980,100,30);
	mango4=new mango(984,177,30);
	mango5=new mango(930,197,30);
	mango6=new mango(1069,200,30);
	mango7=new mango(1153,177,30);
	mango8=new mango(1217,225,30);
	mango9=new mango(1000,245,30);
	
	
	slingShot = new Slingshot(stone.body,{x:200,y:80});
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango7.display();
  mango6.display();
  mango8.display();
  mango9.display();

  stone = new Stone(145,304);
  
  
  

  groundObject.display();
}


function mouseDragged(){

    
  Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})

    return false;
    }
	
	
	
function mouseReleased(){
    slingShot.fly();
    
    return false;

}

function keyPressed(){
    if(keyCode===32){
   slingShot.attach(Stone.body)
    }
}



