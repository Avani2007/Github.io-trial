class Dustbin {
    constructor(x, y, w, h) {
      var options = {
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height= h;
      World.add(world, this.body);
      this.image = loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      fill(255,0,0);
      imageMode(CENTER)
      image(this.image,0,0,120,110)
      pop();
    }
  };
  