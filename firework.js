
function Firework(){
    this.hue = random(255);
    this.firework = new Particle(random(20, width - 20), height, this.hue, true);
    this.explosion;
    this.hasExploded = false;
    this.lifespan = 255;
    this.initVel = this.firework.vel
    this.reachedPeak = false;
    
    
    this.update = function() {
        if(!this.hasExploded){
            //update lifespans
            this.lifespan -= this.initVel.mag() / 2;
            //apply forces
            this.firework.applyForce(gravity);
            if(this.initVel.x > 0){
                this.firework.applyForce(createVector(-0.02, 0));
            } else if(this.initVel.x < 0){
                this.firework.applyForce(createVector(0.02, 0));
            }
            //update
            this.firework.update();
            
            if(this.firework.vel.y >= 0){
                this.reachedPeak = true;
            }
            
            if(this.reachedPeak && this.lifespan <= 0){
                // explode
                this.hasExploded = true;
                this.explode();
            }            
        } else {
            this.explosion.update();
        }
    }
    
    this.show = function() {
        if(!this.hasExploded){
            this.firework.show();
        } else {
            this.explosion.show();
        }
        
    }
    
    this.explode = function(){
        this.explosion = new Explosion(this.firework.pos.x, this.firework.pos.y, this.firework.hue);
        this.explosion.explode();
    }
    
    this.isDone = function(){
        return this.hasExploded && this.explosion.isDone();
    }
    
}