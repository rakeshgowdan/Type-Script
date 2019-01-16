class Point1
{
   constructor(private x?:number,private y?:number)
   {
   }
   draw()
   {
   console.log('X:'+this.x+'Y:'+this.y);
   }  

   get X()
   {
       return this.x;
   }
   set X(value)
   {
       if(value<0)
              throw new Error('value cant be less than zero');
        this.x=value;      
   }
}
let point1 =new Point1(5,2);
point1.draw();
point1.X=10;