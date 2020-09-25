class Log{
  

    constructor(x,y,angle,h) {
       this.height = h;

       this.width = 20;
       
        var option = {
            restitution:0.8
          }

        this.body = Bodies.rectangle(x,y,20,h,option)
        World.add(myWorld,this.body) 

        Matter.Body.setAngle (this.body,angle)

    }

 display()  {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER)
    fill("brown");
     rect(0,0,this.width,this.height);
    pop();

 }
 
}