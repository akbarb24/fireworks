
function Particle(x, y, hue, isFirework) {
    
    this.pos = createVector(x, y);
    this.isFirework = isFirework;
    this.lifespan = 255;
    this.hue = hue;
    
    if(this.isFirework){
        velX = 0;
        velY = 0;
        if(this.pos.x >= width / 2){
            velX = random(-width / 200, - width / 260);
        } else {
            velX = random(width / 260, width / 200);
        }
        velY = random(height / 75, sqrt(2 * gravity.y * height)*0.97);
        this.vel = createVector(velX, -velY);
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 6));
    }
    this.acc = createVector(0, 0);
    
    this.applyForce = function(force){
        this.acc.add(force);
    }
    
    this.update = function(){
        if(!this.isFirework){
            this.vel.mult(0.91);
            this.lifespan -= 3.5;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    
    this.show = function(){
        colorMode(HSB);
        if(!this.isFirework){
            strokeWeight(2);
            stroke(this.hue * (this.lifespan /255), this.lifespan, this.lifespan, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
    
    this.isDead = function() {
        return this.lifespan < 0;
    }
}