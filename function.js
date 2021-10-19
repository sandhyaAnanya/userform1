//named function

function add(n1,n2) {
    var sum=n1+n2
    return sum
    
}

var result=add(10,20)
console.log(`sum  ${result}`);

//anonymous function

var subtract=function(n1,n2){
    var diff=n1-n2
    return diff
}
var res=subtract(20,10)
console.log(`difference = ${res}`);

//self invoked function

(function(n1,n2){
    var res=n1*n2
    console.log(`product= ${res}`);
})(10,20)
//Arrow function
//In single line arrow function return statement will ne added by JS engine
var divide=(n1,n2)=>n1/n2
var d=divide(20,10)
console.log("result="+d);
//single parameters- paranthesis is optional
var greet=name=>{
    return `welcome to team,${name}`
}
console.log(greet());
var greet=name=>{
    return `welcome to team==${name}`
}
console.log(greet(`sandhya`));

//no parameter-paranthesis is mandatory
var printTenNumbers=()=>{
    for(var i=0;i<10;i++)
    {
      console.log(i);
    }
}
printTenNumbers()

console.log("------------function inside a function------------")

function findSquareOfTwoNumbers(n2){
    return function(n1){
        console.log(`suare of two numbers ${n1*n1}`);
    console.log(n2*n2);
    }
}
//  var squareFunction=findSquareOfTwoNumbers(10)
// console.log(`square function=${squareFunction}`);
// squareFunction()

console.log("----------------------function currying-----------------------");
findSquareOfTwoNumbers(20)(10)

console.log("----------------------------------------------------------");

 function test(callback){
     console.log("test method");
     callback()
 }
 function sample(){
     console.log("sample method");
 }
 test(sample)

 


