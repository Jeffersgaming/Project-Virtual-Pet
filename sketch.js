var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
 dogimage = loadImage("images/dogImg.png");
 happydogimage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 100, 100);
  dog.addImage = ("dogimage")
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
text("Food Remaining", 230, 130,);
textSize = 15;
fill("black");
stroke(2);

}
function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

if(x<=0) {
  x = 0;
}
else{
  x=x-1
}

  database.ref('/').update({
    food:x
  })
}



