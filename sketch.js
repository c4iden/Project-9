var btn_red;
var btn_green;

var r = 255;
var g = 255;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn.red = createButton("RED");
  btn.red = position(100,50,);
  btn.red = mousepressed(red_bg);
  
  btn.green = createButton("GREEN");
  btn.green = position(250,50,);
  btn.green = mousepressed(green_bg);
  
}

function draw() {
  background(r,g,b);
 
  
  
}





function red_bg(){
  r = 255;
  g = 0;
  b =0;
  
}

function green_bg(){
  r = 0;
  g = 255;
  b =0;
  
}