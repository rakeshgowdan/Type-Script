var mum = 1;
var count = 2;
// 2016 ES6
//how var or let works
function DoSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally' + i);
}
DoSomething();
