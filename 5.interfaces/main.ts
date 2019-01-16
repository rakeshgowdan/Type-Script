/*
let DrawPoint=(x,y) => {   
}
*/
let DrawPoint=(Point) => {
}
// sometimes code becomes clumpsy passing so many values
// so instead pass object and assign values to object

DrawPoint({
x:1,
y:2
})
/*
DrawPoint({
name:'abc'
// i can pass string 
//it breaks at runtime
})
*/
/* 
let DrawPoint=(point:{x:number,y:number}) => {

    //this will restrict the type
}
*/
// this above signature is not efficiient


//instead of the using interfaces

interface point
{
    x: number,y:number
}
let DrawPoint1=(Point:point) => {
}