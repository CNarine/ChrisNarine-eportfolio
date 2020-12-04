
 
 var textX=110;
 var diam1=5;
 var diam2=1
 var diam3=5

function setup() {
    createCanvas(600,600);
  //background
  background(0,0,55);
}

function draw() {
 if (mouseIsPressed) { 
 stroke(255);
 fill(150);
 } else {
 fill(100);
 stroke(237, 34, 93);
 line(mouseX - 66, mouseY, mouseX + 66, mouseY);
 line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}
  //ellipse
 noStroke();
 fill(100, 100, 218 ,100);
 ellipse(mouseX, mouseY, 80, 80);
  
  //adding text
 fill(RGB,100,218,100,255);
 strokeWeight(20);
 textSize(40);
 textFont('Helvetica');
 //textStyle(NORMAL);
 //textStyle(ITALIC);
 textStyle(BOLD);
 textStyle(BOLDITALIC);
 //text('CLICK*HERE', 10, 90);
 text("*CLICK HERE*!", textX, random(height));
   if(textX >200) {
    textX=100;
  }else{textX=textX+10}
  
  //adding dragging text
    strokeWeight(2);
  fill(162 + sin(frameCount*0.1) * 255);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke(255);
  }
  textSize(12 + (mouseX / width)*75);
  text("*MMP100 1900*", 100, 200);
   

  // Wipe effect Upper-left
  noStroke();
  //fill(255,255,255);
  //strokeWeight(20);
  ellipse(diam1,diam1,diam1,diam1); 
  //conditional
  if(diam1 >580)
  {diam1=10;
  }else{diam1=diam1+1;}
  
   // Wipe effect Upper-Left
  //fill(100,218,100);
  ellipse(diam2, diam2, diam2, diam2);
  //conditional
  if(diam2 >500)
  {diam2=10;
  }else{diam2=diam2+25;}
  

   
     
  
  
}