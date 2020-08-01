class Slingshot {
constructor(bodyA,pointB){

var options = {

bodyA:bodyA,
pointB:pointB,
length:20,
stiffness:0.04

}
this.pointB=pointB
this.body=Constraint.create(options)
World.add(world,this.body)

}
display(){
    if(this.body.bodyA){




    
fill ('red')

line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    }



}   
fly(){

this.body.bodyA=null 

}

}
