// const cart = [
//     {name:"Mouse",price :500, quantity :2},
//     {name: "keyboard", price: 1000, quantity:3},
//     {name:"Monitor", price: 12000, quantity: 4}
    
// ]
// const total = cart.reduce((acc,item)=> {
//     return acc + item.price* item.quantity},0);
// console.log(total);

// const result = cart.map((product)=> product.name + "-Rs." +product.price)
// console.log(result);
//  const new = mcart.filter((product)=> product.price>=1000)
//  console.log(new);
// .map((product)=>product.name);
// console.log(result);
//*Objective: Convert and display a total number of seconds in standard digital clock format
//(HH:MM:SS).
// Slabs / Rules: If hours, minutes, or seconds are single digits, they must be padded with a leading zero (e.g., 5 becomes '05').
// Logical Hint: Use division to find hours, and the remainder operator (%) to isolate remaining minutes and seconds. Use .padStart().
// Expected Case Scenario:
// Input: 3665 → Output: '01:01:05'




// const totalseconds = 3665;
// const hours = Math.floor(3665/3600);
// console.log((hours));
// const remainingseconds = Math.floor(3665%3600);
// console.log(remainingseconds); 
// const minutes = Math.floor(remainingseconds/60);
// console.log((minutes));
// const seconds = Math.floor(remainingseconds% 60);
// console.log((seconds));
// //const hoursString= hours.toString();

// const hoursString = hours.toString().padStart(2, '0');
// console.log(hoursString);
// const minutesString = minutes.toString().padStart(2,"0");
// console.log(minutesString);
// const secondsString= seconds.toString().padStart(2,"0");
// console.log(secondsString);

// const digital_time = hoursString + ":" + minutesString + ":" + secondsString;
//  console.log(digital_time);
// const totalseconds =3665
// const hour =(divide)=> {

//  return Math.floor((totalseconds/3600)) ;}
// console.log(hour(3665,3600));

 //*Calculate a customer's total electricity bill based on an tiered unit consumption slab.
//  Slabs / Rules: Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit. Above 200 units: $5.00/unit.
// Logical Hint: Do not charge the maximum tier rate for all units. Process the computation progressively slab-by-slab.
// Expected Case Scenario:
// Input: 250 units → Calculation: (100 * 1) + (100 * 2) + (50 * 5) → Output: $550


// let units = 250;
// total = 0;
// if (units>100){
//     total  += 100*1;
//     units -= 100;
// }
// else {
//     total += 100*1;
//     units = 0;
// }

// if(units>100){
//     total+= 100*2;
//     units -= 100;
// }
// else {
//     total += 100*2;
//     units =0
// }

// if(units>0){
//     total+=units *5;
// }
// console.log( `$${total}`);




//*Objective: Split a total amount evenly among N friends and display the individual share along with
//the remaining leftover change.

// Slabs / Rules: Individual shares must be flat integers (no cents). Leftover remainder change must be calculated and stored as a standalone value.
// Logical Hint: Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to capture the exact remainder.
// Expected Case Scenario:
// Input: Total = $100, Friends = 3 → Output: Each pays $33, Remainder = $1

// const total = 100;
// const friends = 3;
// const splits = Math.floor((total/friends));
// const remainder = total % friends;
// console.log(` Each pays $${splits}`);
// console.log(`Remainder = $${remainder}`);




//*Objective: Calculate a person's exact current age dynamically given their complete Date of Birth
//(DOB) string.
// Slabs / Rules: Your logic must accurately account for whether the individual's birthday has already happened or has yet to happen in the current calendar year.
// Logical Hint: Instantiating 'new Date()' gives you access to the modern system calendar. Compare years, then adjust based on months and days.
// Expected Case Scenario:
// Input: '1995-12-15' (Assuming current date is June 2026) → Output: 30 (Since Dec
// 15 hasn't occurred yet in 2026)


// let Birth_year= 1995;
// let Birth_month = 12;
// let Birth_day = 15;
// let current_year = 2026;
// let current_month = 6;
// let current_day = 7;

// age = current_year - Birth_year;
// if(current_month> Birth_month){
//      age = age;
// }
// else if(current_month < Birth_month){
//      age = age-1;
// }
// else {
//    if( current_day>= Birth_day){
//     age= age;
//    }else {
//     age = age-1;
//    }
// }
// console.log(age);
    


const birthDate = new Date("1995-6-7");
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const currentMonth = today.getMonth()+1 ;
const birthMonth = birthDate.getMonth() +1;

const currentDay = today.getDate();
const birthDay = birthDate.getDate();

if (currentMonth < birthMonth) {
    age--;
} 
else if (currentMonth === birthMonth && currentDay < birthDay) {
    age--;
}

console.log(age);



//*Objective: Compute the final total checkout amount given the base price of an item and its active
//discount percentage.

// Slabs / Rules: The final output must be rounded to exactly two decimal places representing financial currency cents.
// Logical Hint: Calculate the discount fraction via (price * discount / 100). Use the primitive number utility .toFixed(2) to secure precision.
// Expected Case Scenario:
// Input: Price = $125.50, Discount = 15% → Output: $106.68

const price = 125.50
const Discount = 0.15;
const total_checkout = price- (Discount*price);
console.log(`$${total_checkout.toFixed(2)}`);



//*Calculate an employee's total weekly payroll salary including overtime rules based on
//hours worked and baseline hourly pay.
// Slabs / Rules: Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are overtime, compensated at 1.5 times the standard rate.
// Logical Hint: Use an if-else structural check. Isolate regular hours from overtime hours before multiplying by their respective rates.
// Expected Case Scenario:
// Input: Hours worked = 45, Rate = $20/hr → Calculation: (40 * 20) + (5 * 30) →
// Output: $950


let hours_worked = 45;
let  salary = 0;

if(hours_worked > 40){
    salary += 40* 20;
    hours_worked -= 40;

}
else  {
    salary+= 40*20;
    hours_worked = 0;
}
if (hours_worked>0){
    salary += hours_worked *30;
}
console.log(`$${salary}`);


//*Objective: Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months,
//and remaining Days.
// Slabs / Rules: Assume fixed standard chronological baselines: exactly 365 days = 1 year, and exactly 30 days = 1 month.
// Logical Hint: Perform successive division and remainder operations. Strip years first, then compute months from the remainder, then remaining days.
// Expected Case Scenario:
// Input: 400 days → Output: 1 Year, 1 Month, and 5 Days


const total_Days = 400 ;
const year = Math.floor(400/365);

const remainingdays = Math.floor(400%365);
const month = parseInt(remainingdays/30);

const days = (remainingdays-30);

console.log(` ${year} year, ${month} Month, ${days} Days`);


//*Objective: Given a strict 5-digit integer, compute the sum of all its constituent digits without string
//conversion
// Slabs / Rules: Do not cast, convert, or interpolate the integer into a string or array type. Solve this purely using mathematical algorithms.
// Logical Hint: Continually extract the last trailing digit using modulo (% 10), add it to your tally, and truncate the integer downwards using Math.floor().
// Expected Case Scenario:
// Input: 54321 → Output: 15 (5+4+3+2+1)
// let digits = 54321
// const tal1 = 54321%10;
// const tal2 = Math.floor((54321/10) %10);
// const tal3 = Math.floor((54321/100)) %10
// const tal4= Math.floor((54321/1000)) %10
// const tal5 = Math.floor((54321/10000)) %10
// const total =  (tal1 + tal2 + tal3 + tal4 +tal5);
// console.log(total)




//*Objective: Take a 4-digit number and return its mathematical reverse without utilizing string
//serialization wrappers.
// Slabs / Rules: Do not convert the number into a string, array, or use reverse utilities. Use basic mathematical operators only.
// Logical Hint: Isolate digits sequentially using division and remainders, then recompile them by shifting place values (multiply by 10 dynamically).
// Expected Case Scenario:
// Input: 1234 → Output: 4321
// let digits = 1234
// const tal1 = 1234%10;
// const tal2 = Math.floor((1234/10) %10);
// const tal3 = Math.floor((1234/100)) %10
// const tal4= Math.floor((1234/1000)) %10

// let reversed = tal1*1000 + tal2*100 + tal3*10 + tal4;
// console.log(reversed);




// //*Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan
// // Slabs / Rules: Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]. P = Principal, r = Monthly interest rate (Annual Rate / 12 / 100), n = tenure in months.
// // Logical Hint: Utilize Math.pow() to perform exponential powers cleanly. Ensure financial outputs round smoothly to 2 decimal units.
// // Expected Case Scenario:
// // Input: Principal = $100,000, Annual Rate = 12%, Months = 12 → Output: $8884.88


// let p = 100000;
// let annualRate= 12
// let n = 12;
// let r = annualRate / 12 / 100;

// let power = Math.pow(1 + r, n);
// const EMI = (p * r * power) / (power - 1 );
// console.log(`$${EMI.toFixed(2)}`)
// let totalSeconds = 4329;

// const timer = setInterval(() => {
//   let hours = Math.floor(totalSeconds / 3600);
//   let minutes = Math.floor((totalSeconds % 3600) / 60);
//   let seconds = totalSeconds % 60;

//   // format HH:MM:SS
//   console.log(
//     `${String(hours).padStart(2, "0")}:` +
//     `${String(minutes).padStart(2, "0")}:` +
//     `${String(seconds).padStart(2, "0")}`
//   );

//   totalSeconds--;

//   if (totalSeconds < 0) {
//     clearInterval(timer);
//     console.log("Finished");
//   }
// }, 1000);
// function countdown(hour,minute,seconds){
//     console.log(`${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
    


// if(hour=== 0 && minute===0 && seconds===0){
//     console.log("offer limit ended")
//     return;
// }

// setInterval(()=>{
// //      if(hour>0 && minute>0 && seconds>0){
// //     countdown((hour,minute,seconds-1 )&& (hour,minute-1,seconds-1) && (hour-1,minute-1,seconds-1))
// //     return;
// // }},1000)
// // }
   

//     if( seconds>0){
//         seconds--;
       
//     }
//     else if( minute>0){
//         minute--;
//         seconds= 59;
       
//     }
//     else if (hour>0){
//         hour--;
//         minute=59
//         seconds = 59;
//     }
//     countdown(hour,minute,seconds);
// },1000);
// }

// countdown(1,5,9);

// LEVEL 1 — Variables + Scope + Operators
// VAR-09
// Objective
// Calculate how many complete boxes can be packed and how many items remain.

// Rules
// Each box holds a fixed number of items.
// Output full boxes and leftover items separately.
// Hint

// Use Math.floor() and %.
// Example
// Input:
// Items = 127
// Box Size = 12

// Output:
// Boxes = 10
// Remaining = 7

const Boxes = (a,b)=> a %b 













// VAR-10
// Objective

// Convert total seconds into Hours, Minutes, and Seconds.

// Rules
// 60 sec = 1 min
// 60 min = 1 hr
// Example
// Input:
// 7384

// Output:
// 2 Hours
// 3 Minutes
// 4 Seconds
