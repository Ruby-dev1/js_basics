//*for - in loop (Non-iterables)-> objects 
//?objects
let user = {
    name : "RUbi",
    email: "rubina@example.com",
    pass: "12345",
};
console.log(user);
for( key in user){
    //console.log(user[key]); 
    console.log(key);
    
}
let num = [7,8,9];
for ( key  in num){
    console.log(num[key]);
  // console.log(key);
}


  //*for - of loop -> array & strings (iterables)
  let numbers =[ 1,2,3,4,5];
// for ( let i= 0; i< numbers.length; i++)
// {
//    console.log(numbers[i]);
// }
for(x of numbers) {
   console.log(x); //x works as key
}

//for ( value of "Hello"){
  //  console.log(value);
// //}
// let user1 = {
//      name : "RUbi",
//     email: "john@example",
//     pass:"12345",
// };
// console.log(user1);
// for (x of user1){
//   console.log(x);
// }




//!functions // //* reusable block of code that performs a specific task

//*function declaration 
function function_name() {
    //body of the function
    console.log("hello");
}




//* function invocation// function call
//function_name ();





//function greet(){
 //   console.log("Hello World");     //}
//greet();
//greet();
//greet();

//*funtion with inputs

//!parameter & argument 
//function greet(user, age ){
    //console.log("Hello", user, age );
//}
//greet("ram", 20 ); //ram 
//greet(26 ,"shyam");//shyam
//*default parameter
//function greet(user = "Guest"){ // parameter -> placeholder -> it will take value when we invoke the function
   // console.log("hello",user);

//}
//greet("ram");// argument -> actual value -> it is the real value that we pass to the function when we invoke it
//greet();  // Guest //? default parameter will work when we do not pass any value to the function or we pass undefined


// function add( a=0, b = 0) {
//     console.log(a+b);
// }
// add (2,3);


//* function with return type
// function add( a=0, b = 0) {
// //let sum = a+b; 
// //return sum; 
// return a + b;
// //console.log(a+b); //? it will print the sum but it will not return any value to the caller, so if we try to store the result of this function in a variable, it will be undefined
//  }//? it will return the value of a+b to the caller}
//  let res = add (2,3); //2+3
//  console.log(res);
//  let  result = add();
//  console.log(result);


// function multiply (a=1, b= 1){
//    // return a*b;
//    mult = a*b;
//    return mult;

// }
// let res = multiply(2,3);
// console.log(res);
// let result = multiply ();
// console.log(result);


function divide (a = 1, b= 0)
{
    div = a/b;
    return div;               
}
let res = divide(); 
console.log(res);

//*function expression 
const multiply = function (a=1, b=1){ // anonymous function -> a function without a name
    return a*b;

};
console.log(multiply(2,3));


let dividee = function div(a=1, b=1){
    return a/b;
};
console.log(dividee(8,2));

const user5 = function (name, age){
    console.log(name,age);
};
user5("john",21)



//?function declaration 
function user3(name, age, email)
{
    console.log(name, age, email)
}
user3("Rubina", 20, "ruby@email.com")

function substract( a=0, b=0)
{
    return a-b;
}
let resu = substract( 8-3);// substract ()-> function caller
console.log(resu);



//todo: practice function declaration & function expression 
//todo: arrow function , callback function , higher order function 


//!arrow function -> it is a shorter syntax of function expression
const multiplyy = (a=1,b=1) => a*b;{
    console.log(multiplyy(2,3));
}
const multi = (a=1,b=1) =>{
    return a*b;
};
console.log(multi(3,4));


//!callback function -> a function that is passed as an argument to another function and is executed after some operation is completed


const parent = (callback) => {
    console.log(callback);
    console.log("parent");
    callback(12);
};
const child = (a) => {
    console.log("child",a);
};
//parent(child()); //? parent is the caller function and child is the callback function
parent(child);
parent((a) => {console.log("child 1", a);
});
//parent(()=>{})


    const calculate = (a, b, operation)=>{
        console.log(operation);
        console.log("calculate");
         console.log (operation(a,b));

    }
    const addd = (a,b) => a+b 

    calculate( 1,2, addd);


    //!higher order function


    const outer = () =>{
        console.log("outer")
    ;
    const inner = () => {
        console.log("inner")
    };
    return inner;
};
const y = outer();
y();
console.log(y);

//!IIFE
(() => {
    console.log("IIFE");
})();




