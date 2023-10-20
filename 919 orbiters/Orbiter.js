function Orbiter(parent, angle) {


  this.parent = parent;
  this.radius =  25;
  this.acc = new JSVector();
  //this.vel = new JSVector(0,0);
  this.angle = angle;
  this.angVel = .2;
  this.aAcceleration = 0;
  this.displacement = new JSVector(this.radius * Math.cos(this.angle), this.radius * Math.sin(this.angle))
  this.xDisplacement = this.radius * Math.cos(this.angle);
  this.yDisplacement = this.radius * Math.sin(this.angle);
  this.loc = new JSVector(0,0);
    }
   
    //  placing methods in the prototype (every ball shares functions)
    Orbiter.prototype.run = function () {
      this.update();
    this.render();
  
  
    }
   
   
   
    // renders a bubble to the canvas
    Orbiter.prototype.render = function () {
      context.beginPath();
      context.arc(this.loc.x,this.loc.y, 5, 0, 2 * Math.PI);
      context.strokeStyle = "rgba(255,0,0)";
      context.fillStyle = "rgba(255,0,0)";
      context.fill();
      context.stroke();
    }
   
    //  update bubble every animation frame
    Orbiter.prototype.update = function () {
      //this.loc = new JSVector addGetNew(this.displacement, this.parent.loc);
/*      this.angle += this.angVel;
      this.xDisplacement = this.radius * Math.cos(this.angle);
  this.yDisplacement = this.radius * Math.sin(this.angle);
  this.loc = new JSVector(this.parent.loc.x + this.xDisplacement, this.parent.loc.y + this.yDisplacement)
  */
      this.loc.orbit(this.angle, this.angVel, this.radius, this.parent);
      
 //JSVector.prototype.orbit = function(angle, angVel, radius, sun){
    }
  