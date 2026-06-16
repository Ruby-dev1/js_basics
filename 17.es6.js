//! ES -> ECMA Script
//?ECMAScript is the standard/specification that defines how JavaScript should work.

//* ES6 -> 2015

//! let, const 

//! template literal -> ``

//! arrow function

//! es module -> import/export

//! Promise

//! async await

//! enhanced object literals
// let Name = "john";
// let key = "email";
// let obj = {
//     name, //name:name,
//     [key]:"", //email:""
//     getName:function(){
//         return this.name;

//     },
//    getEmail() {
//         return this.email;
        

//     },

// }
// console.log(obj.name);
// console.log(obj[key]);


// //! class

// //!destructuring

// let john = {
//     name: "john",
//     email:"j@gmail.com",
//     password:"12345",

// };

// let {name,email,password} = john;

//! spread operator ...

//! rest operator ...

//! default parameter

//! rest parameter ...
// function add( a=0, b=0){
//     return a+b;
// }

function add(...numbers){
    console.log(numbers);
    const sum = numbers.reduce((acc,value)=>{
    return acc+value;
},0)
console.log(sum);
return sum;
}
console.log(add(12));
console.log(add(12,45,67,5,2,3));

