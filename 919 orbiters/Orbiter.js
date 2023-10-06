//  Bubble constructor function +++++++++++++++++++++++++++++
function Orbiter(parent) {

this.parent = parent;
this.diam = parent.diam/2;
this.acc = new JSVector();
this.vel = new JSVector();
this.loc = parent.loc.copy();
this.angle = 0;
this.aVelocity = 0;
this.aAcceleration = 0;
  }
  
  //  placing methods in the prototype (every ball shares functions)
  Mover.prototype.run = function (parent) {
this.render();
this.update();
  }
  
  
  
  // renders a bubble to the canvas
  Orbiter.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x,this.loc.y, 10, 0, 2 * Math.PI);
    context.strokeStyle = "rgba(255,0,0)";
    context.fillStyle = "rgba(255,0,0)";
    context.fill();
    context.stroke();
  }
  
  //  update bubble every animation frame
  Orbiter.prototype.update = function () {
  this.vel.add(this.acc);
    this.loc.add(this.vel);

  }