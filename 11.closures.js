//!closures
// const a = ()=>{
//     console.log("a");
//     const b = ()=>{
//         console.log("b");
//         const c= ()=>{
//             console.log("c")
//         };
//         c();
//     };
//     b();
// };
// a();


//a(){}
//b(){}
//c(){}
//{}




//c() -> popped at first after execution is completed ( this scope is completely deleted)
//b()-> now goes in LIFO order 
//a()
//GEC
//callstack


//!closures
//closures gives diff concept , gives lexical scope concept, A closure is when a function remembers variables from its outer scope even after the outer function has finished executing.
const parent =()=>{
    let x = "parent";
    const child = ()=>{
        console.log(x);
    };
    return child;
};
const inner = parent();
    inner(); 
// we can use closure for private function in js . as only the child function could have access of its parent as it is only in function scope not in global scope

// const Counter = ()=> {
//     let count = 0;
//     const inner = ()=>{
    
//         count++;
//         console.log(count);
//     };
//     return inner;
// };
// const counter = Counter();
// const counter1 = Counter();

// counter();//1
// counter();//2
// counter();//3
// counter1();//1
// counter1();//2
// counter();//4
// counter1();//3
//when parent along with inner function is returning, along with it is returning the parent function so inner can access the parent function , it is closure,
//when without using class syntax , if we have to private variable in js , then via closure we can do that

const Counter = (initialCount = 0) => {
  let count = initialCount;

  const increment = () => {
    count++;
  };

  const decrement = () => {
    count--;
  };

  const showcurrent = () => {
    console.log(count);
    return count;
  };

  return {
    increment,
    decrement,
    showcurrent,
  };
};

const counter = Counter(5); // 

counter.increment();//1
//counter.increment();//2
// counter.increment();
// counter.increment();
 counter.decrement();
counter.increment();

counter.showcurrent();

//! function factory
//const add = (factor)=>(num)=> factor +num;
const add = (factor)=>{
    return(num)=>{
        return factor + num;
    };
};
const add5 = add(5);//{factor:5}
const add10 = add(10);//{factor;10}
console.log(add5(10));
console.log(add5(13));
console.log(add5(23));


//* caching
const sum = ()=>{
    let cache = {};
    return (num) =>{ 
        if(cache[num.toString()]){
            console.log("cache")
            return cache[num.toString()];
        }else {
        let res = 0;
        console.log("calculating");
        for(i=0; i<9000000; i++){
            res = num*1000;
        }
        cache[num.toString()]= res;
        return cache[num.toString()];
        }
        
    };
};
const x = sum();
console.log(x(2));
console.log(x(2));
console.log(x(2));
console.log(x(3));
console.log(x(9));
console.log(x(2));
console.log(x(4));
console.log(x(5));
console.log(x(4));
console.log(x(4));
// Account (acc_name, initial_amt)
// deposit, withdraw, balance_inq

const createBankAccount = (acc_name, initial_amt = 1000) => {
    let name = acc_name;
    let balance = initial_amt;

    return {
        deposit: (amt) => {
            if (amt > 0) {
                balance += amt;
                console.log(`Deposited: ${amt}`);
                console.log(`Total balance is: ${balance}`);
            } else {
                console.log("Invalid amount. Deposit amount must be positive.");
            }
        },

        withdraw: (amt) => {
            if (amt <= 0) {
                console.log("Invalid amount. Withdrawal amount must be positive.");
                return;
            }

            if (balance - amt < 500) {
                console.log("Insufficient balance. Minimum balance of 500 must be maintained.");
            } else {
                balance -= amt;
                console.log(`Withdrawn: ${amt}`);
                console.log(`Total balance is: ${balance}`);
            }
        },

        balance_inq: () => {
            console.log(`Total balance is: ${balance}`);
        },

        details: () => {
            console.log({
                name,
                balance,
            });
        },
    };
};

// Example Usage
const acc1 = createBankAccount("Ram", 2000);

acc1.details();
acc1.deposit(1000);
acc1.withdraw(500);
acc1.balance_inq();
    
    
    




