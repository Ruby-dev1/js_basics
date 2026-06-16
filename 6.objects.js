//!objects
//*objects are collection of key-value pairs.
//object constructor
const obj = new Object();


//!object literal -> {}
let user = {
    name : "Rubina", //key-value separator colon(:) multiple key-value pairs are separated by comma(,)
    email: "rubina@example.com",
   // "full name" : "Rubina"
    key : "123456",
    address:{
    city: "ktm",
    country: "nepal"
    }


};
console.log(user["address"]["city"]);
//!reading properties 
//* dot notation 
//const name = user.name;


//*bracket notation []

console.log(user["email"]);
console.log(user["full name"]);
//console.log(name);
let key = "email";
console.log(user[key]); // user["email"] -> user[key] //? it is used when the key is stored in a variable or when the key has special characters or spaces
//key = "name";
console.log(user[key]); // user["name"] //? it will look for the key named "name" in the object and return its value, which is "Rubina".
console.log(user.key);// undefined



//!adding new properties
user.password = "123456";
user ["age"]= 20;
console.log(user);



//!changing existing properties
user.name = 'Rubi';
user.password = "Password";
console.log(user);


//!deleting properties
delete user.key;
delete user.password;
console.log(user);










let a ={
    a:1 ,
    b:2 ,
};
let  c = {
    d: 1,
    a: 20
};


//*spread operator -> ...`
let b = {...a, ...c}; // unpack 
let d =[...[12,3], ...[34,45]];
console.log(d);

a.c= 3;
console.log(a,b);



//*destructuring
let user1 = {
    name : "RUbi",
    email: " rubina@example.com",
    age: 20,

};
//let { name, email, age} = user1;
//console.log(name,email,age);

let user2 = {
    name : "RUbi",
    email: " rubina@example.com",
    age: 20,

};
let { name : user_name , email: user_email, age: user_age } = user2;
console.log(user_name,user_email,user_age);




//!rest operator -> ...

let { name, email,...others} = user1;
console.log(others);

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
let entries = [
  [ 'name', 'RUbi' ],
  [ 'email', ' rubina@example.com' ],
  [ 'age', 20 ]
]
console.log(Object.fromEntries(entries));