//  Bubble constructor function +++++++++++++++++++++++++++++
function Particle(parent, angle) {

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
    this.lifeSpan = 255;
      }
      
      //  placing methods in the prototype (every ball shares functions)
      Particle.prototype.run = function () {
        this.update();
      this.render();
      this.lifeSpan--;
    
      }
      
      //it's not letting me do antthing
      
      // renders a bubble to the canvas
      Particle.prototype.render = function () {
        context.beginPath();
        context.arc(this.loc.x,this.loc.y, 5, 0, 2 * Math.PI);
        context.strokeStyle = "rgba(255,25,100)";
        context.fillStyle = "rgba(255,100,0, 255, this.lifeSpan)";
        context.fill();
        context.stroke();
      }
      
      //  update bubble every animation frame
      Particle.prototype.update = function () {
    
        //this.loc = new JSVector addGetNew(this.displacement, this.parent.loc);
        this.angle += this.angVel;
        this.xDisplacement = this.radius * Math.cos(this.angle);
    this.yDisplacement = this.radius * Math.sin(this.angle);
    this.loc = new JSVector(this.parent.loc.x + this.xDisplacement, this.parent.loc.y + this.yDisplacement)
    }