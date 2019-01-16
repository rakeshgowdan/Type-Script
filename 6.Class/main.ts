class Point
{
    private x:number;
   private y:number;
    
    //?- optional param
   constructor(x?:number,y?:number)
   {
      this.x=x;
      this.y=y;
   }
   draw()
   {
   console.log('X:'+this.x+'Y:'+this.y);

   }

   getDistance(another:Point)
   {
  //..
   }
}
//object
let point =new Point(5,2);
//point.x=5;value can be changed so use access modifers
point.draw();
