class Paper{

    constructor(x,y){
  
var options={
    restitution:1.0,
    friction:1.0,
    density:1.0
}

        this.body=Bodies.rectangle(x,y,50,50,options)
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
display(){

    var pos=this.body.position;
       push()
    
    rectMode(CENTER);
    strokeWeight(4)
    stroke("pink")
    rect(0,0,this.width,this.height);
    pop()
}


}