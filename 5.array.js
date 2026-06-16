//! array
//? array is a collection of items stored at contiguous memory locations. It is a data structure that can hold a fixed number of values of the same type. The values stored in an array are called elements, and each element can be accessed using its index.

//? array can hold multiple values of different data types, but it is not recommended to do so as it can lead to confusion and errors in the code.

//? array is a non-primitive data type, which means that it can be mutated but cannot be reassigned. This means that we can change the values of the elements in the array, but we cannot change the reference of the array itself.

//? array is an ordered collection of items, which means that the order of the elements in the array is preserved. The first element in the array is at index 0, the second element is at index 1, and so on.
//* Array constructor
const arr = new Array();
//* array literal []
 let numbers = [1,2,3,4,5,6,7];
//numbered indexed  & start from 0

//?accessing array elements 
// arr_name[index] -> returns elements 
console.log(numbers[0]);
let first_el= numbers [0];
console.log(first_el);
numbers [0]=20;
console.log(numbers);
//numbers = [ 110,20,30,40,50]; //! cannot reassign the array, but can mutate the array
//console.log(numbers);



//?adding new element
//!from end
//*arr_name.push(ele) -> adds element at the end of the array
//numbers.push(60);
//console.log(numbers);
const res = numbers.push(80,70,90,40);
//console.log(res); //? it returns the new length of the array
//console.log(numbers);


//!from start
//*arr_name.unshift()
//numbers.unshift(12);
//console.log(numbers);


//!removing element from end 
//*arr_name.pop()-> removes the last element from the array and returns it

console.log(numbers.pop());


//!removing element from start
//*arr_name.shift() -> removes the first element from the array and returns it
console.log(numbers.shift());
console.log(numbers);


//!length 

numbers.push(34);
numbers.push(340);

console.log(numbers[numbers.length-1]);
console.log(numbers.length);

//at()
console.log(numbers.at(0), numbers[0]);
console.log(numbers.at(-2), numbers[-1]);
console.log(numbers);


//!splice ()
//*array_name.splice(start_index, delete_count, ...items)
console.log(numbers);

//const res =numbers.splice( 1,2);
//console.log(res);//? it returns the deleted elements [3,4]

const result = numbers.splice(1,2,123,45,6,7);
console.log(res);
console.log(numbers);



//!search()
//*includes(item)-> returns true if the item is present in the array, otherwise returns false
//?returns boolean 
console.log(numbers.includes(45));
console.log(numbers.includes(23));
console.log(numbers)



//*indexof(ele)
//console.log(numbers.indexOf(45));
console.log(numbers.indexOf(6));
console.log(numbers.indexOf(23));
console.log(numbers.lastIndexOf(6));
console.log(numbers);


//todo: array-methods.  