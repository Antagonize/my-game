float x = width/2;
float y = height/2;
float x_dir = 10;

void setup ()  {
size (700, 700); 

}

//drawing the circle

void draw () {
  background (124); 
  frameRate (24); 
  strokeWeight (5);
  fill (255); 
 ellipse (x, y, 100, 100); 
 
 
   x = x + x_dir;
    

  if (x >= width) {
    x_dir = -1 * x_dir;
  }
  else if (x <= 0) {
    }

}

void mousePressed () {

}

  
 