var bg,bgimg;
var zb1,zb1img;
var zb2;
var zb3;
var zb4;
var bar1,bar2,bar3,bar4,bar5,bar5img;
var shooter,shooterimg;
var wood1,woodimg,wood2;
var box1,boximg;

function preload(){
bgimg = loadImage("2078290.jpg");
zb1img =loadImage("Zombie-Transparent.png");
shooterimg = loadImage("shooter.png");
woodimg = loadImage("slantwood.png");
zb2img = loadImage("Zombie-Transparent.png");
bar5img = loadImage("bar5.png");
boximg = loadImage("box1.png");
}

function setup(){
createCanvas(800,600);
bg = createSprite(300,300);
bg.addImage("bg1",bgimg);	

zb1 = createSprite(680,500);
zb1.addImage("zombie",zb2img);
zb1.scale = 0.2;

zb2 = createSprite(600,500);
zb2.addImage("zombie",zb2img);
zb2.scale = 0.2;

zb3 = createSprite(680,100);
zb3.addImage("zombie",zb2img);
zb3.scale = 0.2;

zb4 = createSprite(600,100);
zb4.addImage("zombie",zb2img);
zb4.scale = 0.2;

bar1 = createSprite(50,5,1800,20);
bar1.shapeColor = "black";
bar2 = createSprite(50,595,1800,20);
bar2.shapeColor = "black";
bar3 = createSprite(0,5,20,1800);
bar3.shapeColor = "black";
bar4 = createSprite(795,5,20,1800);
bar4.shapeColor = "black";
bar5 = createSprite(490,480);
bar5.addImage("rod",bar5img)

wood1 = createSprite(630,570);
wood1.addImage("plank",woodimg);
wood1.scale = 0.2;

wood2 = createSprite(630,150);
wood2.addImage("plank",woodimg);
wood2.scale = 0.2;

box1 = createSprite(500,350);
box1.addImage("crate",boximg);
box1.scale = 0.5

shooter = createSprite(110,470);
shooter.addImage("man",shooterimg);
shooter.scale = 0.1;
}

function draw(){
background(0);
drawSprites();
}

