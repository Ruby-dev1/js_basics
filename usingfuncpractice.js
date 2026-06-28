//! Module 1 - Variables
//*Objective: Convert and display a total number of seconds in standard digital clock format(HH:MM:SS).
function convertTime(totalseconds){

const hour = Math.floor(totalseconds / 3600);
const remaining = (totalseconds%3600);
const minute = Math.floor(remaining/60);
const seconds = (remaining-60);
return { hour, minute, seconds };}


const time = convertTime(3665);
console.log(Timeformat(time));

function Timeformat({ hour, minute, seconds}){
    
    const hourString = hour.toString().padStart(2,"0");
    const minuteString =  minute.toString().padStart(2,"0");
    const secondsString = seconds.toString().padStart(2,"0");

    return hourString + ":" + minuteString + ":" + secondsString;
    
}




//* objective: Calculate a customer's total electricity bill based on an tiered unit consumption slab.

const electricitybill= ()=>{

     total = 0;
    let units = 250; 

    if(units>100){
        total+= 100*1;
        units-=100
    }else {
        total+=100*1;
        units =0;
    }
    if(units>100){
        total+= 100*2;
        units-= 100;
    }
    else{
        total+=100*2;
        units=0;
    }
    if(units>0){
        total+= units*5;

    }

    return total;

}
console.log(`$${electricitybill()}`);


//*Objective: Split a total amount evenly among N friends and display the individual share along withthe remaining leftover change.


const splitmoney =(totalmoney,Nfriends)=> {
    const share = Math.floor(totalmoney/Nfriends);
    const remaining = (totalmoney % Nfriends);

    return {share , remaining};

}
const result = splitmoney(100,3);
console.log( ` Each friends has $${result.share}`);
console.log(`Remainder $${result.remaining}`);


//*Objective: Compute the final total checkout amount given the base price of an item and its active discount percentage.


const checkamount = (price, Discount)=>{
    const total_checkout = price - (price *Discount);
    return total_checkout;
}
const res = checkamount(125.50,(15/100));
console.log(`$${res.toFixed(2)}`);



//*Calculate an employee's total weekly payroll salary including overtime rules based on hours worked and baseline hourly pay.



const payroll = (hours_worked)=>{
   let salary=0;

    if(hours_worked>40){
        salary += 40*20;
        hours_worked-=40;
    }else{
        salary += 40*20;
        hours_worked=0;
    }
    if(hours_worked>0){
        salary+=hours_worked * 30;

    }
    return salary;
}
console.log(`$${payroll(45)}`)



//*Objective: Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months,and remaining Days.

const totalduration = (total_days,ydays,mdays)=>{
    const countyear = Math.floor(total_days/ydays);
    const remainingdays = total_days% ydays;
    const count_month = Math.floor(remainingdays/mdays);
    const days = remainingdays % mdays
    return {countyear, remainingdays, count_month, days};
}
const resu = totalduration(400,365,30);
console.log(`${resu.countyear} year, ${resu.count_month} month and ${resu.days} days`);


////*Objective: Given a strict 5-digit integer, compute the sum of all its constituent digits without string conversion

const sum =(digits) => {
        const tal1 =  (digits)%10;
        const tal2 = Math.floor((digits/10)%10);
        const tal3 = Math.floor((digits/100)%10);
        const tal4 = Math.floor((digits/1000)%10);
        const tal5 = Math.floor((digits/10000)%10);
        return (tal5+tal4+tal3+tal2+tal1);
}
//const show = add(tal5+tal4+tal3+tal2+tal1);
const resul = sum(54321);
console.log(resul);
//console.log(show);



//*Objective: Take a 4-digit number and return its mathematical reverse without utilizing string serialization wrappers.

const number= (digits)=>{
    const n1 = digits%10;
    const n2 = parseInt((digits/10)%10);
    const n3 = parseInt((digits/100)%10);
    const n4 = parseInt((digits/1000)%10);

    const reversed = n1*1000+ n2*100+ n3*10 + n4;
    return reversed;

}
const hold = number(1234);
console.log(hold);



//* objective :Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan

const EMI = (p,Ar,n)=>{
    const r = Ar /12 / 100;
    const power = Math.pow(1+r, n);
    const emi = (p * r * power)/ (power - 1);
    return emi;


}
const value = EMI(100000,12,12)
console.log(`$${value.toFixed(2)}`);

//! Module 2 - conditonal statements

//*Objective: Determine whether a student passes or fails an academic term based on multiple coreconditions.
// Slabs / Rules: The student must score at least 40 or higher in all 3 individual subjects, AND the collective average across all three must be 50 or higher.
// Logical Hint: Combine comparison expressions safely using logical AND (&&) operators. Calculate individual rules before evaluation.
// Expected Case Scenario:
// Input: [42, 45, 70] → Output: true (Passed) | Input: [38, 90, 90] → Output: false
// (Failed individual subject)

function result(marks){
    const allsubjectpassed = marks.every((mark)=>mark >=40)
    const averagemarks = marks.reduce((acc,value)=> {
        return acc+value
    })/marks.length;

    return allsubjectpassed && averagemarks >=50;
}
console.log(result([42,45,70]));
console.log(result([38,90,90]));


//*Objective: Find and isolate the single largest maximum number from a series of 5 unique inputvariables.
//Slabs / Rules: Solve this relying strictly on conditional comparison branch operators (>, <, if/else). Do not use Math.max().
// Logical Hint: Assume the first variable is the maximum, then sequentially compare it against the remaining four variables, updating when a larger is found.
// Expected Case Scenario:
// Input: (10, 45, 2, 99, 56) → Output: 99

function largest(numbers){
    let max = numbers[0];
    if(numbers[1]>max){
        max =numbers[1];
    }
    if(numbers[2]>max){
        max= numbers[2];
    }
    if(numbers[3]>max){
        max= numbers[3];
    }
    if(numbers[4]>max){
        max = numbers[4];
    }
    return max;

}
console.log(largest([10,45,2,99,56]));

//*Objective: Given three side lengths, write a rule validation system to check whether they can legallyform a real triangle.
// Slabs / Rules: Triangle Inequality Theorem: A triangle is only valid if the sum of the lengths of any two sides is strictly greater than the remaining third side.
// Logical Hint: Verify all three possible pairings: (a + b > c) && (a + c > b) && (b + c > a).
// Expected Case Scenario:
// Input: 3, 4, 5 → Output: true (Valid) | Input: 1, 2, 5 → Output: false (Invalid)

function triangle (a,b,c){
    if((a+b>c)&&(a+c>b)&&(b+c>a)){
        return true;
    }
    return false;
}
console.log(triangle(3,4,5));
console.log(triangle(1,2,5));


//*Objective: Classify the exact geometric structure of a valid triangle based on its three side lengths.
// Slabs / Rules: Equilateral: All 3 sides are equal. Isosceles: Exactly 2 sides are equal. Scalene: All 3 sides are completely different.
// Logical Hint: First run the validation framework from OP-03. If valid, use strict equality operators (===) to group categories.
// Expected Case Scenario:
// Input: (5, 5, 8) → Output: 'Isosceles'

function geometric(a,b,c){
    if(!((a+b>c)&&(a+c>b)&&(b+c>a))){
        return "Valid triangle";
        
    }
    if(a===b && b===c && a==c){
        return "Equilateral";
    }
    if(a===b|| b==c || a==c){
        return "Isosceles";
    }
    return "Scalene";
}
console.log(geometric(5,5,8));


//*Objective: Determine whether a given year input is a Leap Year or a standard Common Year.
// Slabs / Rules: A year is a leap year if divisible by 4. Exception: If divisible by 100, it is not a leap year unless it is also perfectly divisible by 400.
// Logical Hint: Use nested structures or compound clauses: (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0).
// Expected Case Scenario:
// Input: 2024 → Output: true | Input: 2100 → Output: false
const leapyr = (year)=>{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return true;
    }
    return false;

}
console.log(leapyr(2024));
console.log(leapyr(2100));


//*Objective:Analyze a single string character input and categorize exactly what data type group itbelongs to.
// Slabs / Rules: Categories: 'Uppercase Letter' (A-Z), 'Lowercase Letter' (a-z), 'Digit' (0-9), or 'Symbol/
// Avoid Regular Expressions. Solve this strictly by checking character code indexes via the native string method .charCodeAt(0).
// Logical Hint:
// Expected Case Scenario:
// Input: 'G' → Output: 'Uppercase Letter'

const string = (char)=>{
    const code = char.charCodeAt(0);
    if((code>=65)&&(code<=90)){
        return "Uppercase Letter";
    }
    else if(code>=97 &&code<=122) {
        return "Lowecase Letter"
    }
    else if((code>=48 && (code<=57))){
        return "Digit";
    }

      return  Symbol;



}
console.log(string('G'));

//*Objective: Build an access authentication gateway logic rule processing engine for a digital usermanagement system.
// Slabs / Rules: The user must be 18 years or older AND their account subscription status label must be strictly set to either 'active' OR 'admin'.
// Logical Hint: Enclose status verification options inside grouping parentheses to control precedence: age >= 18 && (status === 'active' || status === 'admin').
// Expected Case Scenario:
// Input: Age = 20, Status = 'active' → Output: true (Granted)

const gateway = (Age,status)=>{
    if(Age >= 18 && (status === 'active' || status === 'admin')){
        return true;
    }
    return false;
}
console.log(gateway(20,"active"));

//*Objective: Build a custom password complexity verification routine to check safety rules whencreating a profile.
// Slabs / Rules: Passes only if it simultaneously fulfills: 1) Min length 8, 2) At least 1 uppercase, 3) At least 1 lowercase, 4) At least 1 numeric digit.
// Logical Hint: Loop through the string elements character by character. Maintain boolean flags for upper, lower, and digits.
// Expected Case Scenario:
// Input: 'SecurePass123' → Output: true (Valid)

const password = (pass)=>{
    for(let i =0; i <pass.length; i++){
    const code = pass.charCodeAt(i);

    if((code>=65)&&(code<=90)){
        return true;
    }
    if(code>=97 &&code<=122) {
        return true;
    }
    if((code>=48 && (code<=57))){
        return true;
    }
    return true;


    }
}
const resul = password("securePass123");

console.log(resul + " (Valid)");


//*Objective: Verify whether an integer input is simultaneously divisible by three primary factors: 2, 3,and 5.
// Slabs / Rules: Leverage a single operational compound conditional check instead of nesting three independent if branches.
// Logical Hint: A number is simultaneously divisible by 2, 3, and 5 if it is perfectly divisible by their lowest common multiple, 30 (% 30 === 0).
// Expected Case Scenario:
// Input: 60 → Output: true | Input: 15 → Output: false


const divisible = (number)=>{
    if(number%30===0){
        return true;
    }
    return false;
}
console.log(divisible(60));
console.log(divisible(15));

//*Objective: Construct a game score arbiter script engine to evaluate and declare the official winner between two competing player objects.
// Slabs / Rules: Compare .score properties (higher wins). Tie-Breaker: If scores match, player with fewer fouls (.fouls) wins. If identical, return 'Absolute Draw'.
// Logical Hint: Use hierarchical structure handling condition priorities: check scores first, then drop to fouls tie-breaker branch.
// Expected Case Scenario:
// Input: P1 = {score:10, fouls:1}, P2 = {score:10, fouls:3} → Output: 'Player 1
// Wins via Tie-breaker'

const gamewinner = (p1,p2)=> {
    if(p1.score>p2.score){
        return "player 1 wins";
    }
    else if (p2.score>p1.score){
        return "player 2 wins";
    }
    else {
        if(p1.fouls<p2.fouls){
            return "player 1 wins via tie-breaker"
        }
        else if (p2.fouls<p1.fouls){
            return " player 2 wins via tie-breaker"
        }
        else {
            return "Absolute Draw";
        }
    }

}
console.log(gamewinner({score:10, fouls:1},{score:10, fouls:3}));

//! MOdule - 3 Object and Data Manipulation

//*Objective: Find and extract the highest-paid employee object from an array of employee records.
// Slabs / Rules: If two employees share the exact same highest salary, return the first one discovered in the array index sequence.
// Logical Hint: Initialize a tracking variable with the first element of the array. Loop through elements, changing tracking pointer if element.salary > currentMax.
// Expected Case Scenario:
// Input: [{name:'A', salary:5000}, {name:'B', salary:8000}] → Output: {name:'B',
// salary:8000}]

const highest_paidemp = ()=>{
   const  Info =  [{
        name: "A",
        salary: 5000,
    },
    {
        name:"B",
        salary: 80000,
    },

]
let currentMax = Info[0];
for ( i=0; i< Info.length; i++){
if (Info[1].salary> currentMax.salary){
    return currentMax = Info[1];
}
}
}
const element = highest_paidemp();
console.log(element);

//* Objective:Calculate the collective average salary of an array of employee objects.
//Slabs / Rules:Return 0 if the input array is empty. Round the final calculated value to exactly twodecimal places.
//logical hint :Iterate through the array to add up all salary sub-properties, then divide by array.length. Use .toFixed(2) for output normalization.
// Expected Case Scenario:
// Input: [{salary: 3000}, {salary: 6000}] → Output: '4500.00'

const avgsalary = ()=>{
    const  employee = [{
        salary: 3000,
     } ,
    {
        salary: 6000
    }
    ]
    const total = employee.reduce((acc,emp)=>{
        return acc + emp.salary;

    },0)/employee.length;
    return total ;
    
     
}
console.log(avgsalary());

//* Objective: Filter a user database array and return a new array containing only the users who are 18 years or older.
// Slabs / Rules: Do not mutate the incoming array reference. If no elements match criteria parameters, return an empty array.
// Logical Hint: Initialize a clean output array. Loop through elements and conditionally push copies of matching objects into it.
// Expected Case Scenario:
// Input: [{name:'A', age:16}, {name:'B', age:22}] → Output: [{name:'B', age:22}]

const agefilter = ()=>{
    const user = [
        {
            name: "A",
            age: 16

    },
    {
        name: "B",
        age: 22,

    },
    {
        
    }
]

for(i=0; i<user.length;i++){
 return user.filter(user=> user.age>18);

}

}
console.log(agefilter());

//* objective: Convert a flat array of user objects into a lookup dictionary keyed by a unique property marker like 'id'.
//  slab/ rules :MERN optimization strategy: Turn an O(N) array scan into an O(1) constant-time key
// Logical hint: Create an empty object. Iterate over the array and assign each item to the object using item.id as the dynamic property key.
// Expected Case Scenario:
// Input: [{id:'u1', name:'Alice'}] → Output: {'u1': {id:'u1', name:'Alice'}}
    
    
    const convert = ()=>{
        const users = [
            {
                id: "u1",
                name: "Alice",

        }     
    ]
    const usersMap = {};
    for ( const user of users){
        usersMap[user.id] = user;
    }
    return usersMap;

    }
  console.log(convert());


  //* objective : Group an array of student records into a single object classified by their assigned gradestring.
// Slabs / Rules: The grouped object keys must match unique grade letters, and values must be arrays containing matching student records.
// Logical Hint: Check if your accumulator object already has an entry array for the given grade key; if not, declare it as an empty list before pushing.
// Expected Case Scenario:
// Input: [{name:'X', grade:'A'}, {name:'Y', grade:'B'}] → Output: {'A': [{name:'X',
// grade:'A'}], 'B': [{name:'Y', grade:'B'}]}

const records = ()=>{
    const students = [
        {
            name: "X",
            grade: "A",
        },
        {
            name: "y",
            grade: "B",
        }
    ]
   const gstudents = students.reduce((acc, student)=>{
    if(!acc[student.grade]){
        acc[student.grade]=[];
    }
    acc[student.grade].push(student);
    return acc;

   },{})
   return gstudents;
}
console.log(records());



//*Objective: Count the cumulative total quantity of items currently in stock inside an e-commercecatalog, categorized by department label.
// Slabs / Rules: Output a single analytical analytics summary object tracking totals per category key.
// Logical Hint: Use an object-accumulator tracking pattern, parsing each element item, updating category numeric counts progressively.
// Expected Case Scenario:
// Input: [{cat:'Tech', stock:5}, {cat:'Tech', stock:2}] → Output: {Tech: 7}

const totalstock = ()=>{
    const quantity = [
        {
            cat: "Tech",
            stock: 5,

    },
    {
        cat: "Tech",
        stock: 2
    }
]

const items = quantity.reduce((acc,item)=>{
    if(!acc[item.cat]){
        acc[item.cat]=0;
    }
    acc[item.cat] += item.stock;
    return acc;


},{})
return items
}
console.log(totalstock());


//* objective :Consolidate a raw array data stream containing duplicate entries with matching ID markers, aggregating their values.
// Slabs / Rules: Merge matching IDs together and aggregate their respective values into a clean normalized collection index.
// Logical Hint: Utilize an auxiliary map or object dictionary to handle quick aggregations before mapping entries back into a flat array structure.
// Expected Case Scenario:
// Input: [{id:101, qty:2}, {id:101, qty:3}] → Output: [{id: 101, qty: 5}]

const duplicate = ()=>{
    const raw = [
        {
            id: 101,
            qty: 2

    },
    {
        id: 101,
        qty:5
    }
]


const matchingID = raw.reduce((acc, item)=>{
    if(!acc[item.id]){
        acc[item.id]=[]
    }
    acc[item.id] += item.qty;
    return acc;

},{})

return Object.keys(matchingID).map(id=>({
    id:Number(id),
    qty: matchingID[id]

}));

}
console.log(duplicate());

//*Objective: Run a profile compliance health check comparing a profile object against mandatoryrequired fields.
// Slabs / Rules: Output a clean array list of missing field strings. Empty strings ('') are considered present; completely missing keys are flagged.
// Logical Hint: Loop through the required fields collection array, checking presence via the 'hasOwn' lookup or evaluating if key === undefined.
// Expected Case Scenario:
// Input: Profile = {name:'J'}, Required = ['name', 'email'] → Output: ['email']
const healthcheck=()=>{
const profile = {name: "J"};
const required = ["name", "email"]
const missing = [];

for(let field of required){
    if (profile[field] === undefined){
         missing.push(field)
    }
}
return missing
}
console.log(healthcheck());



//*Objective: Sort an array of user profile entries by their numerical age properties in ascending
// sequence order safely.
// Slabs / Rules: Ensure the function is completely non-destructive. Copy the base reference to prevent mutation of the original inputs.
// Logical Hint: Clone the incoming array using syntax structures like array spreads [...arr] or slice() before invoking a custom bubble sort logic.
// Expected Case Scenario:
// Input: [{age:30}, {age:20}] → Output: [{age:20}, {age:30}]

const sortingage=(profile)=>{
   
    //const clone = [...arr];
    const clone = profile.slice(0,2);
    clone.sort((a,b)=>{
        return a.age -b.age;
    })

return {
    profile,
    clone
}
}

const result = sortingage([{age:30},{age:20}]);
// console.log(result);

console.log(`Before sorting the age`,result.profile);
console.log("After sorting the age", result.clone);


//*Objective: Build a real-time leaderboard array sorting players by high score descending; if scorestie, sort alphabetically.
// Slabs / Rules: Sort primarily by numerical score values high-to-low. If scores balance evenly, secondary sort alphabetically by username.
// Logical Hint: Inside comparison conditions, specify tie handling blocks: if (p1.score === p2.score) compare usernames via localeCompare() or inequalities.
// Expected Case Scenario:
// Input: [{user:'B', score:80}, {user:'A', score:80}] → Output: [{user:'A', score:
// 80}, {user:'B', score:80}]

const leaderboard = (score)=>{
    const declare = score.sort((p1,p2)=>{
        if(p1.score === p2.score){

            return p2.user.localeCompare(p1.user)

        }
       return p1.score - p2.score
    })
    return declare;


}

console.log(leaderboard([{user:"B", score:80},{user:"A", score:80}]))