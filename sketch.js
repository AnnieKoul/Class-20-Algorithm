var box1,box2
function setup() {
  createCanvas(800,400);
   box1 =createSprite(400, 200, 50, 85);
box2=createSprite(400,200,50,70)
box1.shapeColor="pink"
box2.shapeColor="pink"
box1.debug=true
box2.debug=true
}

function draw() {
  background(0);  

  drawSprites();
  box1.x=mouseX
  box1.y=mouseY
  if(box1.x-box2.x<box1.width/2+box2.width/2 &&
    box2.x-box1.x<box1.width/2+box2.width/2 &&
    box1.y-box2.y<box1.height/2+box2.height/2 &&
    box2.y-box1.y<box1.height/2+box2.height/2){
      box1.shapeColor="yellow"
      box2.shapeColor="yellow"
    }
    else{
      box1.shapeColor="pink"
box2.shapeColor="pink"
    }
}
