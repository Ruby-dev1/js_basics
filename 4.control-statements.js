//! control flow 
// order of the execution of statements in a program is called control flow.

//! control statements
//control statements are used to control the flow of execution of a program based on certain conditions or loops.

//*if
let age= 17;
if(age){
    console.log("age is " ,17);
}

//*if-else;
if (age >= 18){
    console.log("can vote");
}
else{
    console.log("cannot vote");
}
//*if-else ladderv/ else if
if (age >= 60){
    console.log("Major citizen");
}
else if (age>=18){
    console.log("Adult");

}
else{
    console.log("Minor");
}

//*switch case // it is used to execute one block of code among many blocks of code based on the value of an expression.
let day = 4;
switch (day) {
    case 1:{
        console.log("Sunday");
        break;
    }
    case 2:{
        console.log("MOnday");
        break;
    }
    case 3: {
        console.log("tuesday");
        break;
    
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("thursday");
        break;
    }
    case 6:{
        console.log("friday");
        break;
    }
    case 7:{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Enter day between 1 to 7"); 
    }  

        
}

//let dd = 6
//switch (dd){
  //  case 1:
  //  case 7:{
 //console.log("Weekend");
   // break;}

   // case 2:
   // case 3:
   // case 4:
  //  case 5:
   // case 6:
     // {   
 // console.log("Weekday");
    //break;}
    //default:{ console.log("Enter day between 1 to 7");
//}}







//? loops
  //*while loop

  //let i = 11;
 // while (i <= 10) {
    console.log(i);
    i++;
 // }

  //* do while loop
 // let j = 11;
//console.log("do-while");
 // do {
    console.log(j);
    j++;

//  } while( j<= 10 );

  //*for loop
console.log("for loop");
  //for (let i = 0; i <= 10; i--){
   // console.log(i);
  //}
 //*jump / branch statements
 //?break
 for (let i=0; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
 }
 //?continue
 for (let i=0; i<=10; i++){
    if(i === 5 || i === 7){
        continue;
    }
    console.log(i);
 }
 //?return
 for (let i=0; i<=10; i++){
    if (i===5){
        return i;
    }
 }
