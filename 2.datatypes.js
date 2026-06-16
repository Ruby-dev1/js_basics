//! Data types


//! primitive     //cannot be muted but can be reassigned // basic data structures
//*number
let  a = 23;
let b = 2.222;

//*string
let c = "Hello World";
let d = '';
//? template literal => ``
let e = `edfefefwe
wfefef
fefeffse`;
//let e = `Hello  2+2`;
let user = "John";
let f = `Hello ${user}`; //? interpolation
//let e = `Hello ${2+2}`; //? interpolation
console.log(f);


//*boolean
 let i  = true;
 let g = false;

//*null
let j = null;
console.log(j);
//*undefined
let h;

console.log(h);


//? diff betn undefined & not defined

x=34;//ReferenceError: x is not defined
// console.log(x); //! not defined // an error

let y;
console.log(y); //! undefined// not an error

//! Non-primitive //? can be mutated but cannot be reassigned // complex data structures
//?object 
//?array
//? function