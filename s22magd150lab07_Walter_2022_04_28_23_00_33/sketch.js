let flower1;               //Defines each flower so they can be drawn.
let flower2;
let flower3;
let flower4;

let ranCol;
                        //Creates an array with 8 different colors for the flowers.
let colors = ['#e6194B','#ffe119','#4363d8','#f58231','#911eb4','#f032e6','#dcbeff','#ffffff'];  


function setup() {
  createCanvas(400, 400);
  ranCol = floor(random(0,8));   //Selects a random color from the array for the flowers on each
  flower1 = new Flower();        //time you run the code.
  flower2 = new Flower();
  flower3 = new Flower();
  flower4 = new Flower();
}

function draw() {
 
  background('#567d46');
  stroke('#87ceeb');
  fill('#87ceeb');               //Creates the background grass along with the sky.
  rect(0,0,400,180);
  
  sun();                  //Calls the sun function to draw the sun.
  
  flower1.show();
  translate(80,10);
  flower2.show();              //Calls the class that draws the flowers in different positions.
  translate(-120,33);
  flower3.show();
  translate(-50,-100);
  flower4.show();
 
                  

  
}

class Flower {           //Creates the class for making the flowers.
  constructor() {
    this.x = 100;
    this.y = 100;
  }
  
  show() {
        strokeWeight(3);
  stroke('#90EE90')
  line(210,300,210,200);           //Creates the flower stem.
  strokeWeight(1);
  stroke(50);                
    fill(colors[ranCol]);       //Fills the flower petals with a random color from array.
  circle(200,209,30);              //Creates the flower petals.
  translate(15,10);
  circle(200,200,30);
  translate(5,10);
  circle(200,200,30);
  translate(-5,10);
  circle(200,200,30);
  translate(-10,0);
  circle(200,200,30);
  translate(-10,-10);
  circle(200,200,30);
  } 
  
  
}   //end class

  function sun() {                 //Creates the sun along with the light shafts.
       fill('#f9d71c');
  circle(0,10,50);
stroke('#f9d71c');                
  line(0,10,30,60);
  line(0,15,20,65);
  line(0,5,40,50);
  line(0,8,50,40);
  line(0,5,60,30);
  }

