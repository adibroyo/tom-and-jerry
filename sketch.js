var tom,jerry,bgImg; 
var tomImg,jerryimg,bg;
function preload() { 
    //load the images here
 bgImg=loadImage("garden.png")
tomImg=loadAnimation("cat1,cat2,cat3,cat4")
jerryImg=loadAnimation("mouse1,mouse2,mouse3,mouse4")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(100,100,10,10)
    tom.addAnimations(tomImg)
    jerry=createSprite(200,100,10,10)
    jerry.addAnimations(jerryImg)
    bg=createSprite(800,800,10,10)
    bg.addImage(bgImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here


}
