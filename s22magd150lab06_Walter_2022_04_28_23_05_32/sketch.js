let size = 40;
function setup() {
  createCanvas(400, 400);
  
}
                 //This draws background color and calls functions.
function draw() {
  background(0);
  pacman();
  food();
  ghostStuff();
}
           //This function draws pacman and moves based on mouse position.

function pacman() {
                                //draws pacman
  fill('#FFFF00');
  arc(mouseX, mouseY, size, size, 0, PI + HALF_PI);
  

    
  
  /* I tried to make random dots but they kept drawing new ones continuously...
  for (let i = 1; i < 3; i++) {
    x = random(width)
    y = random(height)
  fill('#ffffba')
  circle(x,y,10)
} */
  
}

function food() {
                                //This function draws the "food".
  fill('#ffffba');
  circle(124,215,10);
  translate(30, -35);
  circle(124,215,10);
  translate(30, -35);
  circle(124,215,10);
  translate(30, -35);
  circle(124,215,10);
  translate(30, -35);
  //draws powerup
  fill('#D2042D');
  scale(1.2);
  circle(124,215,15);
  
 
}
                        //This function draws the ghost and ghosts base.
function ghostStuff() {
                             //This draws the ghosts base.    
  fill('#ADD8E6');
  translate(width / 2, height / 2);
rotate(PI / 4);
rect(33, 33, 45, 45);
  fill(0);
  rect(42,42,26,26);
  
                                  //This draws the ghost.
  fill('#0000FF');
  arc(50, 55, 50, 50, 0, HALF_PI);
  fill('#FFFFFF');
  circle(55,70,5);
  circle(60,62,5)

}
