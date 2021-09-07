


function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(250);

  if (keyDown(UP_ARROW)){

  background("red");

  }

  if (keyDown(DOWN_ARROW)){

  background("yellow");
  
  }

 if (keyDown(LEFT_ARROW)){

  background("green");
  }

 if (keyDown(RIGHT_ARROW)){

  background("blue");
      
   }

 if (keyDown("space")){

  background("purple");

        
   }

}




