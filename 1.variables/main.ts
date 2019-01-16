var mum=1;
let count=2;
// 2016 ES6

//how var or let works
function DoSomething()
{
    for(var i=0;i<5;i++)
    {
        console.log(i);
    }
    // var is available outside 
    console.log('finally' +i);
}
  
DoSomething();

function Something()
{
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    // var is available outside 
    console.log('finally' +i);  // not available 
    // when u compile tsc converts to es5 for compatibility
}
