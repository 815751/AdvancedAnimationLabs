//  Bubble constructor function +++++++++++++++++++++++++++++
function PSystem(x, y, dx, dy, diam) {

    this.diam = diam;
    this.clr = "rgba(255,255,255,255)";
    this.isOverlapping = false;
    this.acc = new JSVector();
    this.vel = new JSVector(dx, dy);
    this.loc = new JSVector(x, y);
    this.numParticles = 4;
    this.particles = [];
     for (let i = 0; i < this.numParticles; i++) {
    this.particles.push(new Particle(this, i * (2*Math.PI) / this.numOrbiters ));
    }
  
  
    PSystem.prototype.run = function () {
  
    this.update();
    this.checkEdges();
    this.render();
    this.runParticles();
  
  }
  
  //  Check to see if buuble leaves canvas area and reposition in necessary
  PSystem.prototype.checkEdges = function () {
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
  PSystem.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x,this.loc.y, 10, 0, 2 * Math.PI);
    context.strokeStyle = "rgba(170,255,57)";
    context.fillStyle = "rgba(170,255,57)";
    context.fill();
    context.stroke();
  }
  
  PSystem.prototype.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel)
  }
  
  PSystem.prototype.runOrbiters = function() {
    for (let i = 0; i < this.orbiters.length; i++){
      this.orbiters[i].run();
    }
    //this.orbiter.run();
  }
}