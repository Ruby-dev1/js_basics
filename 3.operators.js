//!operators


// //*arithmetic operators
// //? +,-,*,/,%,**
// console.log(2+3);
// let sum = 2+3;
// let a = 34;
// let b = 25;
// console.log(a+b);
// console.log(11 + 22);
// console.log(11/2);
// console.log(11%2);
// console.log(2**4);
// console.log("hello" + " " + "world");



//*assignment operators
//? =, +=, -=, *=, /=, %=, **= 
let c = 10;
let d =10;
c += 5; //? c = c + 5
c += d;// 25;










//* comparison operators
//? ==, ===, !=, !==, >, <, >=, <=
//?output -> boolean
console.log(10<10);// false
console.log(10<=10);// true

let x =10;
let y = "10";
console.log(x==y); //? true // ?loose equality operator -> only checks value // before compare ,try to convet into same data types
console.log(x===y); //?false   //? strict equality operator -> checks value & data type // before compare, do not try to convert into same data types




//*logical operators
//? and  &&,  or ||,  not !

console.log(true && true); //* true //&&= short circuit operator -> if first operand is false, then it will not check for second operand, it will directly return false
console.log(true && false); //? false
console.log(false && false); //? false

console.log(true || true); //? true
console.log(true || false); //? true
console.log(false || false); //? false

console.log(!true); //? false
console.log(!false); //? true



//* short circuit concept 
let isAdmin = true;
let res = isAdmin && "Admin";
console.log(res); //? Admin

isAdmin = false;
res = isAdmin && "Admin";
console.log(res); //? false


//*typeof 
console.log(typeof 23); //? number //? it is a unary operator, it returns the data type of the operand
//console.log(typeof x); //? number
x = "abc";
console.log("typeof");
console.log(typeof x); //? string
console.log(typeof x === "number"); //? false
console.log(typeof x === "string"); //? true
console.log(typeof null); //? object -> this is a bug in javascript, but it is not fixed for legacy reasons // ? null is a primitive data type, but typeof null returns object
console.log(typeof undefined); //? undefined






//*bitwise operators
//? &, |, ^, ~, <<, >>, >>>
console.log(5 & 3); //? 1 //? 5 -> 0101, 3 -> 0011, 0101 & 0011 -> 0001 -> 1
console.log(5 | 3); //? 7 //? 5 -> 0101, 3 -> 0011, 0101 | 0011 -> 0111 -> 7



//*unary operators
//increment ++
let  z = 10;
//post
console.log(z++);//10 //? first it will return the value of z, then it will increment the value of z
console.log(z); //? 11
//pre 
console.log(++z);// ? 12 //? first it will increment the value of z, then it will return the value of z
console.log(z); //? 12


//decrement --
//post
console.log(z--);//12 //? first it will return the value of z, then it will decrement the value of z
console.log(z); //? 11
//pre 
console.log(--z);// ? 10 //? first it will decrement the value of z, then it will return the value of z
console.log(z); //? 10



//!ternary operator
//? condition ? expression1 : expression2
//let age = 18;
//console.log(age >=18? "can vote" : "cannot vote");

let age = 17;
let result = age >=18? "can vote" : "cannot vote";
console.log(result);


//!type conversion 
//? implicit type conversion -> when we perform operations on different data types, javascript will try to convert them into same data type // ? it will convert into number, if we perform arithmetic operations, 
//explicit type conversion -> when we manually convert one data type into another data type //? we can use built-in functions like Number(), String(), Boolean() for explicit type conversion 


//todo: type conversion  // ? implicit type conversion //? explicit type conversion 
//todo : type coercion// ? it is the process of converting one data type into another data type, it can be implicit or explicit //? it happens when we perform operations on different data types, javascript will try to convert them into same data type //? it can lead to unexpected results, so it is important to understand how type coercion works in javascript
//todo : truthy & falsy values // ? falsy values -> false, 0, -0, 0n, "", null, undefined, NaN //? truthy values -> all values except falsy values are truthy values // //
//todo: diff betn type conversion & type coercion //? type conversion is the process of converting one data type into another data type, it can be implicit or explicit //? type coercion is the process of converting one data type into another data type, it can be implicit or explicit, but it happens automatically when we perform operations on different data types, javascript will try to convert them into same data type //? type conversion is a manual process, while type coercion is an automatic process 




//todo: type conversion

//? explicit type conversion
console.log(Boolean(0)); //? false
console.log(Boolean(1)); //? true
console.log(Number("123")); //? 123
console.log(Number("abc")); //? NaN
console.log(String(123)); //? "123"
console.log(String(true)); //? "true"

//*parseInt
console.log(parseInt("123")); //? 123
console.log(parseInt("123.45")); //? 123
console.log(parseInt("abc")); //? NaN
console.log(parseInt("123abc")); //? 123
console.log(parseInt("abc123")); //? NaN

//*parseFloat
console.log(parseFloat("123.45")); //? 123.45
console.log(parseFloat("123abc")); //? 123
console.log(parseFloat("abc123")); //? NaN


//? implicit type conversion


//todo: type coercion
console.log(2 + "3");//? "23" //? number + string -> string
console.log("5" - 2);//? 3 //? string - number -> number
console.log("5" * 2);// ? 10 //? string * number -> number//? NaN //? string - number -> number, but "abd" cannot be converted to number, so it returns NaN  
console.log("abd"- 2);//? NaN //? string - number -> number, but "abd" cannot be converted to number, so it returns NaN        


//!truthy & falsy values
//? falsy values -> false, 0, -0, 0n, "", null, undefined, NaN
//? truthy values -> all values except falsy values are truthy values

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

if(10 < 12)
{
    console.log("if");
}



//*use case of truthy & falsy values
//let user = findByid(id);
 let user = null;
 //if(user===null || user === undefined)
 //{
   // console.log("user not found");
 //}
 
 if(!user){
    console.log("user not found");
 }


 let a = 20;
 let b = "20";
 console.log(a === b); //? false //? strict equality operator -> checks value & data type // before compare, do not try to convert into same data types