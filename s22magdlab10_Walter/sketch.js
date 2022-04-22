//Finds the csv file that I made for all of the mlb teams cities.
function preload() {
  table = loadTable('mlbCity.csv');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  //Creates the list from what I had on my csv file.
 print("All MLB teams cities: ");
    for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
 } 
 
}


  //Creates the moving camera and calls both building functions.
function draw() {
  background('#ADD8E6');
  
  camera(80, 0, 400 + sin(frameCount * 0.01) * 20, 0, 0, 0.1, 0, 1, 0);
  tower();
  stadium();
}

  //This function creates the directional light and the tower form.
function tower() {
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  
  directionalLight(250, 150, 150, -dirX, -dirY, -1);
  specularMaterial('#90EE90');
  shininess(90);
  
  translate(-100, 30, 40);
  fill('#aaa9ad');
  box(85,250,50);
  translate(0,-100,0);
  fill(90);
  cylinder();
}

  //This function creates the ambient light along with the stadium.
function stadium() {
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(70);
  ambientMaterial(50, 100, 200);
  pointLight(80, 155, 195, locX, locY, 150);

  translate(170,150,40);
  fill('#90EE90');
  cylinder(70,80,25);
  fill('#0000FF');
  cone(85,100,24);
}