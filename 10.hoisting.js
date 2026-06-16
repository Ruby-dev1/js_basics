//! hoisting
//  console.log(x)
//  var x= 10;
//  console.log(x);
 // hoisting in js understands as the above code as;
 // var x; // behavior as it moves the declaration part above
 //console.log(x);
 //x=10; // but not initialization
 //console.log(x);



 //*function declaration
//  hoist();

// function hoist(){
//     console.log("hoist")
// }
// hoist();




//*function expression
 //fn();// undefined()as memory --- fn is not treated as function
// var fn = function (){
//     console.log("var functiom");

// };
// fn();



//*let 
// fnn();
// let fnn = function (){
//     console.log("let function ");
// };
//fnn();

// if not hoisted then -> not defined error comes 
// console.log(y); // can't access y before initialization -> hoisted 
// let y = 13;

//?TDZ : temporal dead zone - let is hoisted in TDZ
//TDZ = zone between varibale declaration to the variable initialization 

// console.log(z);
// // const z = 10;

// fnnn();
// const fnnn = function (){
//     console.log("const function ");
// }


// !memory creation phase 
//* memory allocation 
//{x: undefined , hoist:(){}}
//script :{ z: <not available>}
//!execution phase
//{ x: 34 ,hoist:(){}, z:45}
//*memory initialization
//*execute - one line at a time scan and code execution

console.log(x);//undefined
var x=34;  //var x; = memory allocation part but x =34; = execution part
console.log(x);//34


hoist(); // hoist
function hoist (){
    //console.log(y);//undefined
   // var y = 10;
    console.log("hoist")
}
hoist();// hoist 

let z = 45;


//todo:callstack
//it is a data structure and works in LIFO , manage the function execution order.

//todo: execution context

//Global execution context
 //when this context push in callstack then only the file will run
 // at first the GEC is pushed in callstack 
 //then HEC 
 //local the {message:Hello}
 //when greet() is called its execution happens and then deletes the memory allocation {message:hello} when another greet() is called

let x = 10;

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();





