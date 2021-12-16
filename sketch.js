var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  box.shapeColor = "blue";
}

function draw() 
{
  background(30);
  if(keyDown("left")) {
    box.x -= 3;
  }
  if(keyDown("right")) {
    box.x += 3;
  }
  if(keyDown("up")) {
    box.y -= 3;
  }
  if(keyDown("down")) {
    box.y += 3;
  }
  drawSprites();
}




