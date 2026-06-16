//!class
// let john = {
//     name: john,
//     email: john@gmail.com,
//     password: "12335"
// };

// let user = {
//     name : user,
//     email: user@gmail.com,
//     password:"12345"
// }



class user {
   // name; //*if property public no need to declare but incase of private , we need to declare.
    //email;
    #password; //*can be used in same class only , not outside the class **private property
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.#password = password;

    }
    getPassword(){
        return this.#password
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email
    }
    introduce(){
        console.log("This is user class");
    }

}
let john = new user("john Doe", "john@gmail.com", "12345");
let ram = new user ("Ram", "Ram@gmail.com", "2345")
console.log(john);
console.log(john.name);
console.log(john["email"]);
console.log(ram);
//console.log(john.#password);
console.log(john.getPassword());
console.log(ram.getPassword());







//!student(name,email,password,faculty,roll, batch)

class student extends user {
     #password;
    faculty;
    roll;
    //batch;
    //super()

    constructor(name,email,password,faculty,roll,batch){
        // this.name = name;
        // this.email = email;
        // this.#password = password;
        super(name,email,password);
        this.faculty = faculty;
        this.roll = roll;
        this.batch = batch;
     }
    // getName(){
    //     return this.name;
    // }
    // getEmail(){
    //     return this.email;
    // }
    // getPassword(){
    //     return this.#password;

    // }
    getFaculty(){
        return this.faculty;
    }
    getRoll(){
        return this.roll;
    }
    getBatch(){
        return this.batch;
    }
    introduce(){
        console.log("This is Student class");
    }
}

let Rubi = new student("Rubi Subedi","rubi@gmail.com","2345","CSIT","50","2081");
console.log(Rubi);
console.log(Rubi.getPassword());
console.log(Rubi.name)
console.log(Rubi.batch)
john.introduce();
Rubi.introduce();


//*abstraction
class MakeCoffee{
    start(){
        console.log("Start");
        this.#grinding();
        this.#heatingWater();
        this.#processing();
        this.#despatch();
    }
    #grinding(){
        console.log("grinding");
    }
    #heatingWater(){
        console.log("Heating Water");
    }
   #processing(){
        console.log("processing");

    }
    #despatch(){
        console.log("coffee is ready");
    }
}
const cm = new MakeCoffee();
cm.start();
// cm.grinding();
// cm.heatingWater()
// cm.processing();
// cm.despatch();


//todo: static method , getter , setter   
// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(Calculator.add(10, 5)); // 15

// const calc = new Calculator();
// calc.add(10, 5); // Error: calc.add is not a function

//A getter lets you access a method like a property. //Benefit: Compute values while accessing them like normal properties.

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const p = new Person("John", "Doe");

// console.log(p.fullName); // John Doe
// Notice: no parentheses ()


//A setter runs when a property is assigned a value.

// class Person {
//   constructor() {
//     this.age = 0;
//   }

//   set age(value) {
//     if (value < 0) {
//       console.log("Age cannot be negative");
//       return;
//     }
//     this.age = value;
//   }

//   get age() {
//     return this.age;
//   }
// }

// const p = new Person();

// p.age = 25;       // Calls setter
// console.log(p.age); // Calls getter → 25

// p.age = -5;       // Age cannot be negative
class circle {
    constructor(r){
        this.radius= r;
    }
    set rad(r){
        this.radius = r;
    }
    get area (){
        return Math.PI * this.radius * this.radius;
    }
}
const c1 = new circle (10);
console.log(c1.area);
c1.rad = 12;
console.log((c1.area).toFixed(2));


