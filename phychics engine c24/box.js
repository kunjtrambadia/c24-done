class Box{
  

    constructor(x,y,b,h) {
       this.height = h;

       this.width = b;
       
        var option = {
            restitution:0.8
          }

        this.body = Bodies.rectangle(x,y,b,h,option)
        World.add(myWorld,this.body) 
    }

 display()  {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER)
    fill("blue");
     rect(0,0,this.width,this.height);
    pop();

 }
 
}

class Ground{

constructor (groundColor) {
console.log (groundColor);
   var options = {
      isStatic:true
    }
    
    this.body = Bodies.rectangle(400,400,800,10,options)
    World.add(myWorld,this.body)
    this.color = groundColor;
}
display() {
  
   fill(this.color);
   rectMode(CENTER);
   rect(this.body.position.x,this.body.position.y,800,10);
   
 }


}
