//!scope 
//*visibility or accessibility of variables // let and const = block scope but var = global scope but in fuction it is only function scope
//?global scope
// let x = 10;
// const y = 5;
// var z = 45;
//let x = 10;
//let z = 47;

//?block scope
if(true){
    let x = 10;
const y = 5;
var z = 45;
    console.log(x,y,z);
}
//console.log(z)


//*function scope 
const scope = ()=>{
    let x = 10;
    const y = 34;
    var z = 45;
    //console.log(x,y,z);
};
// scope();
// console.log(z);// it is out of function scope
// console.log(x);//it is out of function scope
// console.log(y);//it is out of function scope




//todo;
//*lexical scope
 const outer=()=>{
    let b = 100;
    console.log("outer")

    const inner = ()=>{
        let  a= 20;
        console.log(a);
    }
    inner();
    //*console.log(a);//parent can't access child - hence outer function can't access the varibale of inner function 


 }
 outer();


//*scope chain  // error comes if that variable is also not in global - basically it searches the variable one step scope above it is not found.
 let x = 100;
 const outerr=()=>{
    let a = 35;
    const innerr=()=>{
        let b = 35;
        console.log(x+a+b);
    }
    innerr();
 }
outerr();

if (true){
    let x =23;
    if(true){
        console.log(x);
        x=56;
        console.log(x);
    }
    console.log(x);
}


