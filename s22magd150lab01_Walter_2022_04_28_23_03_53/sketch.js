function setup() {
  createCanvas(200, 200);
 
  //house
  fill(255, 204, 0);
rect(100, 100, 60, 60);
 
  //garage door outline
  strokeWeight(5);
  strokeCap(SQUARE);
  line(47.5, 110, 100, 110);
 strokeCap(SQUARE);
  line(50, 160, 50, 110);
     strokeWeight(2);
     strokeCap(SQUARE);
     line(47.5, 160, 100, 160);
 
  //garage door
  strokeWeight(1);
  line(47.5, 118, 100, 118);
  line(47.5, 125, 100, 125);
  line(47.5, 135, 100, 135);
  line(47.5, 145, 100, 145);
  line(47.5, 155, 100, 155);
 
 
 
  //door
    noStroke();
  rectMode(CENTER);
fill(123);
rect(130, 145, 15, 30);  

  //windows
  fill(232);
  rect(148, 140, 15, 11);
  rect(112, 140, 15, 11);
  ellipse(130, 115, 18, 18);

 
 
  function draw() {
   
  background(155);
 
   

   
   
}

 
}
