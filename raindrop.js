class Raindrop{
    constructor(x,y){
         var option= {
            'restitution': 0.5,
            'friction': 1,
            'density': 1.5,
        }
    this.bodies= Bodies.rectangle (x,y,width,height,options);
    this.width= width;
    this.height= height;
    World.add(world, this.body);
    }
    display(){
        var angle= this.body.angle;
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate (angle);
        pop();
    }
}