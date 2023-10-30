//  Bubble constructor function +++++++++++++++++++++++++++++
function pSystem(x, y, dx, dy, diam) {

    this.diam = diam;
    this.clr = "rgba(255,255,255,255)";
    this.loc = new JSVector(x, y);
    this.particles = [];
     for (let i = 0; i < this.numOrbiters; i++) {
    this.particles.push(new Particle(this, i * (2*Math.PI) / this.numOrbiters ));
    }
  }
  
  pSystem.prototype.run = function () {
  
    this.update();
    this.checkEdges();
    this.render();
    this.runOrbiters();
  
  }
  
  //  Check to see if buuble leaves canvas area and reposition in necessary
  pSystem.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
      this.vel.x = -1 * this.vel.x;
    }
    if (this.loc.x < 0) {
      this.vel.x = -1 * this.vel.x;
    }
    if (this.loc.y > canvas.height) {
      this.vel.y = -1 * this.vel.y;
    }
    if (this.loc.y < 0) {
      this.vel.y = -1 * this.vel.y;
    }
  }
  
  // renders a bubble to the canvas
  pSystem.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x,this.loc.y, 10, 0, 2 * Math.PI);
    context.strokeStyle = "rgba(170,255,57)";
    context.fillStyle = "rgba(170,255,57)";
    context.fill();
    context.stroke();
  }
  
  pSystem.prototype.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel)
  }
  
  pSystem.prototype.runOrbiters = function() {
    for (let i = 0; i < this.particles.length; i++){
      if(this.particles[i].lifeSpan == 0){
        this.particles.splice(i, 1);
      }else{
      this.particles[i].run();
    }
  }
    //this.orbiter.run();
  }
  