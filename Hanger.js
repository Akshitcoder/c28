class Hanger{
    constructor(){
        this.body = Bodies.rectangle (350,100,250,40,{isStatic:true})
        World.add(world,this.body)
        




    }
display(){
fill('white')


rect(this.body.position.x,this.body.position.y,250,40)



}


}

