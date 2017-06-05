var fireworks = [];
var gravity;
var clickExplosions = [];

function setup() {
    unloadScrollBars();
    createCanvas(window.innerWidth, window.innerHeight);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function mousePressed(){
    x = new Explosion(mouseX, mouseY, random(255));
    clickExplosions.push(x);
    x.explode();
}

function updateLogic(){
    if(random(1) < 0.05){
        fireworks.push(new Firework());
    }
    for(var i = fireworks.length - 1; i >= 0; i--){
        fireworks[i].update();
        if(fireworks[i].isDone()){
            fireworks.splice(i, 1);
        }
    }
    
    for(var i = clickExplosions.length - 1; i >= 0; i--){
        clickExplosions[i].update();
    }
}

function draw() {
    updateLogic();
    colorMode(RGB);
    background(0, 0, 0, 25);
    for(var i = fireworks.length - 1; i >= 0; i--){
        fireworks[i].show();
    }
    for(var i = clickExplosions.length - 1; i >= 0; i--){
        clickExplosions[i].show();
    }
}
