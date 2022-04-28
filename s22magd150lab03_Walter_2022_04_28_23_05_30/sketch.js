function setup() {
  createCanvas(400, 400);
  frameRate(20);
  textSize(25);
  textAlign(CENTER);
}

function draw() {
  background(132);
  //frames  
  text(frameCount, width / 2, height / 2);
  //previous mouseX
  line(mouseX, mouseY, pmouseX, pmouseY);
  //constraint
  let leftWall = 50
  let rightWall = 350
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);
  stroke(100);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  fill(0);
  ellipse(xc, 180, 9, 9);
  
  //map
  let m = map(mouseX, 0, width, 25, 400);
  ellipse(m, 225, 50, 50);
  
  //distance 
  let x1 = 150;
  let y1 = 95;
  let x2 = mouseX;
  let y2 = mouseY;
  line(x1, y1, x2, y2);
  fill('#523466')
  ellipse(x1, y1, 55, 55);
  ellipse(x2, y2, 55, 55);
  
  //math
let x = 1.5;
print('The value of x is: '+x)
print('The value of x * x is: '+(x*x));
print('The value of x - x is: '+(x-x));
print('The value f x + x is: '+(x+x));
print('The value of x / x is: '+(x/x));
 
  //mouseX
  fill(112,100,222);
  ellipse(mouseX,100,100,100);
  //mouseY
  fill(44,50,166);
  ellipse(mouseY,333,150,150);
  
}