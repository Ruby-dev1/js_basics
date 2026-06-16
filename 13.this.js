//!this -> object, 

// console.log(this);
// //module.exports = {}

// function a(){
//     console.log(this);
// }
//a(); //*global object


// let user = {
//     name:"JOhn doe",
//     email: "john@gmail.com",
//     getName: function (){
     //console.log(this.name)
//         console.log(this);
    //console.log(user.name)
//     },

// };
// //user.getName();//john doe
// const fn = user.getName;
// fn(); // function where it is called define the this, 
// let user = {
//     name:"JOhn doe",
//     email: "john@gmail.com",
//     getName:  function (){
//           const a =   ()=>{

//         console.log(this.name);
//        // console.log(this);
  
//     };
//     a();
// },

// };

// user.getName();

//*function declaration has its own this, but function expression doesn't have its own this.

// class user{
//     constructor(name, email){ // constructor function won't be represented as arrow function cz , arrow doesn't have its own this property , for to get this , need parent function but constructor doesn't have parent function
//         this.name =name;
//         this.email = email;

//     }
//     getName(){
//         return this.name;
//     }
// }
// const u = newUser ("john","j@gmail.com");//  this of constructor is ("..........")
// // {} <-this
// console.log(u.getName());





//!function object 
function introduce(){
    //console.log("Hello World");
    console.log("Hello ", this.name)
}
//console.log(introduce.name)
//introduce();

//!call , apply , bind



let user = {
     name:"JOhn doe",
  email: "john@gmail.com",
};
let user1 = {
     name:"JOhn doe1",
  email: "john@gmail.com",
};

function introduce (age,email ){
    console.log("Hello ", this.name, age,email);
}

//*introduce.call(user, 32,"gmail");
//introduce.call(user1);
//*introduce.apply(user1, [25, "j@gmail.com"]);

//?bind
const fn = introduce.bind(user, 23, "imail")
fn();


