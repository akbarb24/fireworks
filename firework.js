
function Firework(){
    this.hue = random(255);
    this.firework = new Particle(random(20, width - 20), height, this.hue, true);
    this.hasExploded = false;
    this.particles = [];
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
            
            
        }
        for(var i = this.particles.length - 1; i >= 0; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].isDead()){
                this.particles.splice(i, 1);
            }
        }
    }
    
    this.show = function() {
        if(!this.hasExploded){
            this.firework.show();
        }
        for(var i = 0; i < this.particles.length; i++){
            this.particles[i].show();
        }
    }
    
    this.explode = function(){
        for(var i = 0; i < 100; i++){
            this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue));
        }
    }
    
    this.isDone = function(){
        return this.hasExploded && this.particles.length == 0;
    }
    
}