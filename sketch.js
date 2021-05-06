var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
surface1=createSprite(85,580,150,20)
surface2=createSprite(245,580,150,20)
surface3=createSprite(405,580,150,20)
surface4=createSprite(565,580,150,20)
box=createSprite(random(20,680),100,50,50)

surface1.shapeColor="yellow"
surface2.shapeColor="red"
surface4.shapeColor="purple"
surface3.shapeColor="lightblue"
box.shapeColor=255

    //create box sprite and give velocity
box.velocityX=2
box.velocityY=-10

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites()
box.bounceOff(edges)

drawSprites()


    //add condition to check if box touching surface and make it box

if(box.isTouching(surface1) && box.bounceOff(surface1)){
box.shapeColor="yellow"
music.play();
}

if(box.isTouching(surface2) && box.bounceOff(surface2)){
    box.shapeColor="red"
    
    }

     if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor="lightblue"
        music.stop();
        box.velocityX=0
        box.velocityY=0
        }

        if(box.isTouching(surface4) && box.bounceOff(surface4)){
            box.shapeColor="purple"
            
            }


}
