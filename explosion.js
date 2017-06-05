function Explosion(x, y, hue){
    
    this.x = x;
    this.y = y;
    this.particles = [];
    this.hue = hue;
    
    this.explode = function(){
        for(var i = 0; i < 100; i++){
            this.particles.push(new Particle(this.x, this.y, this.hue));
        }
    }
    
    this.update = function(){
        for(var i = this.particles.length - 1; i >= 0; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].isDead()){
                this.particles.splice(i, 1);
            }
        }
    }
    
    this.show = function(){
        for(var i = 0; i < this.particles.length; i++){
            this.particles[i].show();
        }
    }
    
    this.isDone = function(){
        return this.particles.length == 0;
    }
}