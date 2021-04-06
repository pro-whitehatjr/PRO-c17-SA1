var box1;
var box2;
var box3;

function setup() 
{
  createCanvas(400, 400);
  
  box1 = new Box(100,50,30,30,2,1);
  box2 = new Box(150,150,30,30,1,2);
  box3 = new Box(200,100,30,30,3,4);
  
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.bounce();

  box2.show();
  box2.move();
  box2.bounce();

  box3.show();
  box3.move();
  box3.bounce();
}