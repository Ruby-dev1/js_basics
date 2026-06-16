//*Objective: Convert and display a total number of seconds in standard digital clock format(HH:MM:SS).
// function convertTime(totalseconds){

// const hour = Math.floor(totalseconds / 3600);
// const remaining = (totalseconds%3600);
// const minute = Math.floor(remaining/60);
// const seconds = (remaining-60);
// return { hour, minute, seconds };}


// const time = convertTime(3665);
// console.log(Timeformat(time));

// function Timeformat({ hour, minute, seconds}){
    
//     const hourString = hour.toString().padStart(2,"0");
//     const minuteString =  minute.toString().padStart(2,"0");
//     const secondsString = seconds.toString().padStart(2,"0");

//     return hourString + ":" + minuteString + ":" + secondsString;
    
// }




// //*Calculate a customer's total electricity bill based on an tiered unit consumption slab.
// const electricitybill= ()=>{

//      total = 0;
//     let units = 250; 

//     if(units>100){
//         total+= 100*1;
//         units-=100
//     }else {
//         total+=100*1;
//         units =0;
//     }
//     if(units>100){
//         total+= 100*2;
//         units-= 100;
//     }
//     else{
//         total+=100*2;
//         units=0;
//     }
//     if(units>0){
//         total+= units*5;

//     }

//     return total;

// }
// console.log(`$${electricitybill()}`);


// //*Objective: Split a total amount evenly among N friends and display the individual share along withthe remaining leftover change.


// const splitmoney =(totalmoney,Nfriends)=> {
//     const share = Math.floor(totalmoney/Nfriends);
//     const remaining = (totalmoney % Nfriends);

//     return {share , remaining};

// }
// const result = splitmoney(100,3);
// console.log( ` Each friends has $${result.share}`);
// console.log(`Remainder $${result.remaining}`);


// //*Objective: Compute the final total checkout amount given the base price of an item and its active
// //discount percentage.


// const checkamount = (price, Discount)=>{
//     const total_checkout = price - (price *Discount);
//     return total_checkout;
// }
// const res = checkamount(125.50,(15/100));
// console.log(`$${res.toFixed(2)}`);



// //*Calculate an employee's total weekly payroll salary including overtime rules based on
// //hours worked and baseline hourly pay.



// const payroll = (hours_worked)=>{
//    let salary=0;

//     if(hours_worked>40){
//         salary += 40*20;
//         hours_worked-=40;
//     }else{
//         salary += 40*20;
//         hours_worked=0;
//     }
//     if(hours_worked>0){
//         salary+=hours_worked * 30;

//     }
//     return salary;
// }
// console.log(`$${payroll(45)}`)



// //*Objective: Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months,
// //and remaining Days.

// const totalduration = (total_days,ydays,mdays)=>{
//     const countyear = Math.floor(total_days/ydays);
//     const remainingdays = total_days% ydays;
//     const count_month = Math.floor(remainingdays/mdays);
//     const days = remainingdays % mdays
//     return {countyear, remainingdays, count_month, days};
// }
// const resu = totalduration(400,365,30);
// console.log(`${resu.countyear} year, ${resu.count_month} month and ${resu.days} days`);


// ////*Objective: Given a strict 5-digit integer, compute the sum of all its constituent digits without string
// //conversion

// const sum =(digits) => {
//         const tal1 =  (digits)%10;
//         const tal2 = Math.floor((digits/10)%10);
//         const tal3 = Math.floor((digits/100)%10);
//         const tal4 = Math.floor((digits/1000)%10);
//         const tal5 = Math.floor((digits/10000)%10);
//         return (tal5+tal4+tal3+tal2+tal1);
// }
// //const show = add(tal5+tal4+tal3+tal2+tal1);
// const resul = sum(54321);
// console.log(resul);
// //console.log(show);



// //*Objective: Take a 4-digit number and return its mathematical reverse without utilizing string
// //serialization wrappers.

// const number= (digits)=>{
//     const n1 = digits%10;
//     const n2 = parseInt((digits/10)%10);
//     const n3 = parseInt((digits/100)%10);
//     const n4 = parseInt((digits/1000)%10);

//     const reversed = n1*1000+ n2*100+ n3*10 + n4;
//     return reversed;

// }
// const hold = number(1234);
// console.log(hold);



// ////*Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan
// const EMI = (p,Ar,n)=>{
//     const r = Ar /12 / 100;
//     const power = Math.pow(1+r, n);
//     const emi = (p * r * power)/ (power - 1);
//     return emi;


// }
// const value = EMI(100000,12,12)
// console.log(`$${value.toFixed(2)}`);


//!Objective: Determine whether a student passes or fails an academic term based on multiple coreconditions.
//Slabs / Rules: The student must score at least 40 or higher in all 3 individual subjects, AND the collective average across all three must be 50 or higher.
//Logical Hint: Combine comparison expressions safely using logical AND (&&) operators. Calculate individual rules before evaluation.
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