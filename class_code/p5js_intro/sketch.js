let xPos = 0; 
let yPos = 0; 
let size = 40; 
let myColor; 

function setup() { 
    let cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent("#sketch-parent");
    background(255, 220, 255);
    myColor = color(0, 255, 0);

    noCursor();
}

function draw() { 
fill(myColor);
stroke(255, 0, 0);
strokeWeight(2);
ellipse(xPos, yPos, size, size);

xPos+=10; 
print(xPos); 

if(xPos > width + size/2) { 
    xPos = -size/2;
    yPos = random(height);
    myColor = color(random(255), random(255), random(25));
  }
}

function windowResized() {
resizeCanvas(innerWidth, innerHeight); 
background(255, 220, 255);

}