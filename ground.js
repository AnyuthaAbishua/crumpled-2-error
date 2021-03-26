class Ground{
    constructor(x,y,width,height){
        var options = {
            'restitution':1,
            'friction':2,
            'density':1,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
       
    rectMode(CENTER);
    fill("yellow");
    rect(400,650, this.width, this.height);
    ;
    }
}