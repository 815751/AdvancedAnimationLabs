//  Bubble constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, diam) {

  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
  this.acc = new JSVector();
  this.vel = new JSVector(dx, dy);
  this.loc = new JSVector(x, y);
  this.numOrbiters = 4;
  this.orbiters = [];
  // for (let i = 0; i < this.numOrbiters; i++) {
  this.orbiters.push(new Orbiter(this));
  // }
}

Mover.prototype.run = function () {

  this.update();
  this.checkEdges();
  this.render();

}

//  Check to see if buuble leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
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
Mover.prototype.render = function () {
  context.beginPath();
  context.arc(this.loc.x,this.loc.y, 10, 0, 2 * Math.PI);
  context.strokeStyle = "rgba(170,255,57)";
  context.fillStyle = "rgba(170,255,57)";
  context.fill();
  context.stroke();
}

Mover.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel)
}

