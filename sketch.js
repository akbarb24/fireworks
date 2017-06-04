var fireworks = [];
var gravity;

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

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);
    if(random(1) < 0.05){
        fireworks.push(new Firework());
    }
    for(var i = fireworks.length - 1; i >= 0; i--){
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].isDone()){
            fireworks.splice(i, 1);
        }
    }
}
