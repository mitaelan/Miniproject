var ballX = -100;
var ballY = -100;
var maxCircleSize = 20
var phase = 0, speed = 0.1;


function preload() {
  soundFormats("wav");
  g_note = loadSound("g_note.wav");
  //g_note = loadSound();
  a_note = loadSound("a_note.wav");
  b_note = loadSound("b_note.wav");
  c_note = loadSound("c_note.wav");
  d_note = loadSound("d_note.wav");
  e_note = loadSound("e_note.wav");
  f_note = loadSound("f_note.wav");
}

function bounceBall(myX)
{
  var x = myX;
  var y = height/3 + sin(phase) * 50;
  phase = frameCount * speed;
  var sizeOffset = (cos(phase) + 1) * 0.75;
  var circleSize = sizeOffset * maxCircleSize;
  noStroke();
  fill(255,153,51);  //140,0);
  ellipse(x, y, circleSize, circleSize);
  //fill(0);
  
}

//function setup() {
//  createCanvas(460, 400);

var c1, c2;

  function setup() {
  createCanvas(460, 400);  
}

function setMyBackground()
{
   // Define colors
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
}

function updateBall() {
  //circle(ballX, ballY, 20);
  //fill(255);
  //if(ballY >= -20) {
  //  ballY -= 20; //changes the speed of the ball
  //}
}


function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}




function draw() {

  var AIsPressed = false;
  var SIsPressed = false;
  var DIsPressed = false;
  var FIsPressed = false;
  var GIsPressed = false;
  var HIsPressed = false;
  var JIsPressed = false;

  //background(220);
  setMyBackground();
  updateBall();
  if (keyIsPressed) 
  {
    ballY = 220;   

  /*
A - 65 - g_note
S - 83 - a_note
D - 68 - b_note
F - 70 - c_note
G - 71 - d_note
H - 72 - e_note
J - 74 - f_note
  */
    
    switch(keyCode)
    {
      case 65:
        {
            AIsPressed = true; 
            g_note.play();
            ballX = 57; //where the ball starts
            bounceBall(57);
        }
        break;
        
        case 83:
        {
          SIsPressed = true;
          a_note.play();
          ballX = 115;
          bounceBall(115);
        }
        break;
        
        case 68:
        {
          DIsPressed = true;
          b_note.play();
          ballX = 173;
          bounceBall(173);
        }
        break;
        
        case 70:
        {
          FIsPressed = true;
          c_note.play();
          ballX = 231;
          bounceBall(231);
        }
        break;
        
        case 71:
        {
          GIsPressed = true;
          d_note.play();
          ballX = 289;
          bounceBall(289);
        }
        break;
        
        case 72:
        {
          HIsPressed = true;
          e_note.play();
          ballX = 347;
          bounceBall(347);
        }
        break;
        
        case 74:
        {
          JIsPressed = true;
          f_note.play();
          ballX = 405;
          bounceBall(405);
        }
        break;
        
        
        default:
           break;
        
    }
  }
  else
  {
    fill(255);
    
  }
  
  
  if(AIsPressed) { //a
    fill(0);
    
  } else {
    fill(255);
    
  }
  rect(30, 220, 55, 180); 
  
  if(SIsPressed) { //s
    fill(0);
  } else {
    fill(255);
  }
  rect(88,220, 55, 180); //s
  
  if(DIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(146,220,55,180); //d
  
  if(FIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(204,220,55,180); //f
  
  if(GIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(262,220,55,180); //g
  
  if(HIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(320,220,55,180); 
  
  //h
  if(JIsPressed) {
    fill(0);
  } else {
    fill(255);
  }  
  rect(378,220,55,180); //j
  
  noStroke();
  fill(55); 
  
}
