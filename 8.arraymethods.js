//!array methods
//* push, pop, shift, unshift, splice, indexof, lastindexof, includes

let numbers = [2,4,5,6,7];
//let double = [];

//? forEach
//arr.forEach(callback) 
// we use for loop to modify or change the elements of arr //like double the elements

// const callback = (value, index, arr) =>{ // should be in order only
//     console.log(value, index, arr);
//     //arr[index]= arr[index] *2;
//     double[index] = arr[index]*2;
// };
//  const res = numbers.forEach(callback); // we cannot use foreach to return value; 
//  console.log(res);
//  console.log(double);
//  console.log(numbers);
// numbers.forEach((v,i) => { //for index we need{v,i}, for value {v}, for arr {v,i,arr}
//     console.log(i)

// });


//* mapy x => y -> also gives value, index, array
//returns new array
//arr.map(callback)
// const double = numbers.map((num)=>{
//     //return num * 2;
//     return "x";
// });

// //const double = numbeers.map((num)=> num*2);
// console.log(numbers);
// console.log(double);


// const users = [{
//     name: "john",
//     email: "john@.com",

// },
// {
//     name: "Ram",
//     email: "Ram@.com",

// },
// {
//     name:"shyam",
//     email:"shyam@.com"
// },{
//     name:"Tina"
// }
// ];

// // const user1 = users.map((user)=>{
// //     return user.name;

// // })
// ;
// const user1= users.map(()=> users.user);
// console.log(user1)


// const users_with_user_name = users.map((user)=>{
//   //  user.user_name = user.name + "-" + user.email;
//   //  return user;

//   return {
//     ...user, 
//     user_name: user.name + "-" + user.email,
//   };
// });
// console.log(users_with_user_name);



//? filter
//arr.filter(callback)
// const even = numbers.filter((num, i)=>{
//     if (num%2=== 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// });
const even = numbers.filter((num,i) => num%2===0);
const odd = numbers.filter((num,i)=> num%2!== 0);
console.log(numbers.filter((num,i)=> num >=10));
console.log(even);
console.log(odd);


//*reduce
// [2,4,5,6,7]=> sum 
const sum = numbers.reduce((acc, value,)=>{ // { prevvalue, current value, current index, arr}
    //console.log(acc, value , index, arr)
    return (acc+= value);
}, 10);
console.log(sum);
console.log(numbers);


//*find -> matching objects,value, undefined
//*findindex ->index, -1
//*sort -> sorting/ modifying array
//*every-> boolean
//*some -> boolean


//todo:
let cart = {
user:1,
items: [
    {
    product: {
        id: 1,
        price: 1000,
    },
    quantity: 10,
    },
    {
    product: {
        id: 2,
        price: 500,
    },
    quantity: 4,
    },
    {
    product: {
        id: 3,
        price: 1500,
    },
    quantity: 6,
    },
],
};

const total = cart.items.reduce((acc,item)=>{
    return acc+ item.product.price *item.quantity; 
},0);
console.log(total);
//const nums = users.reduce((Acc,value)=>{
  // return acc+= value  });
  //console.log(nums)


//   const carrt = [
//     {
//         name:"Mouse",
//         price:400
//     },
//     {
//         name:"Keyboard",
//         price:1500,
        
//     },{
//         name:"Monitor",
//         price:1200
//     }
//   ];
//     const total = carrt.reduce((acc,item)=>{
//         return (acc+ item.price);
//     },0);
//     console.log(total)

const array = [101,10,20,2,45,4,67,6];

console.log(array);

array.sort((a,b)=>{
 return a-b;
 //a.localcompare(b) -> for  (a-b) string
 //return b-a;
 //b.localcompare(a) -> for (b-a) string 
 //
});

//+ve -> swap 
// -ve -> no swap
//0 -> no swap.   

console.log(array);


const students = [
    {
        name:"Ram",
        marks:[43, 65, 78, 30,20],
    },{
        name:"Hari",
        marks:[34, 65, 78, 76,89],
    },{
        name:"sita",
        marks:[48, 56, 78, 76,89],
    },
];
// let  a = students.map((student)=>{
//     console.log(student);

//     const summ = student.marks.reduce((acc, item)=>{
//         return (acc+=item)
//     })/student.marks.length; console.log(sum)
//     // return{
//     //     ...student,
//     //     avg_mark: summ,
      
//     // };
   
// })
// .filter((std )=> std.avg_mark>=50)
// .map((std)=>std.name);
  
//  console.log(a);


const calculateAvg = (arr)=>{
    return(
        arr.reduce((acc, mark)=> {
            return (acc += mark);
        })/arr.length
    );
};
const result = students.map((student)=>{
    
    return {
        ...student,
        avg_mark: calculateAvg(student.marks),

    };

})
.filter((std)=> std.avg_mark>= 50)
.map((std)=> std.name);
console.log(result);


const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];


const product_info = products.map((product)=>product.name +"-Rs." + product.price);
console.log(product_info);