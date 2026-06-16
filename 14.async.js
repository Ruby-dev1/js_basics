//!asynch
//synchronous- blocking - sequential order - have to wait for one to complete
//asynchronous - non-blocking- doesn't have to wait

// //*setTimeout - non-blocking method function // asynch
// //?setTimeout(callback,timer_out.....args)
// console.log("start");

//  const timer_id = setTimeout((a,b)=>{ //uses--- need to use lil late but execute exactly  once!! eg. schedule tasks
// console.log("processing",a,b);
// },2000,12,123)
// //console.log(timer_id._timerArgs);

// clearTimeout(timer_id);

// let i = 0;

// setInterval(()=>{
//     console.log(i);
//     if(i===10){
//         clearInterval(id);
//     }
//     i++;
// },1000);
// console.log("end");

//todo: hh:mm:ss ->countdown timer using setInterval as  shown  the timer in ecommerce website 
//todo 1:12:09 until 0 

// function countdown(hour,minute,seconds){
   



//  const timer = setInterval(()=>{
// //      if(hour>0 && minute>0 && seconds>0){
// //     countdown((hour,minute,seconds-1 )&& (hour,minute-1,seconds-1) && (hour-1,minute-1,seconds-1))
// //     return;
// // }},1000)
// // }
//     console.log(`${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
//     if(hour=== 0 && minute===0 && seconds===0){
//     console.log("offer limit ended")
//     clearInterval(timer)
//     return;
// }


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
//    // countdown(hour,minute,seconds);
// },1000);
// }

// countdown(1,12,9);




//todo: callback function 
//*A callback function is a function that is passed as an argument to another function and is executed later—often after some task finishes. In asynchronous programming, callbacks are used to handle operations that take time (like API calls, file reading, timers) without blocking the program.

// function a (callback){
//     console.log('a')
// callback(12);

// }
// a((b)=>{
//     console.log(b)
// });


//getUser() api 


// console.log("start");

// const getUser = (callback) => {
//     setTimeout(() => {
//         console.log("Users fetched");
//         callback(null, {
//             _id: 1,
//             name: "john doe",
//             email: "j@gmail.com"
//         });
//         // callback("message: user fetch failed")
//     }, 3000);
// };

// const getPosts = (userId, callback) => {
//     setTimeout(() => {
//         console.log("posts fetched");
//         callback(null, [
//             {
//                 _id: 1,
//                 userId: userId,
//                 title: "post1",
//             },
//             {
//                 _id: 2,
//                 userId: userId,
//                 title: "post2",
//             }
//         ]);
//     }, 2000);
// };

// console.log("end");

// const getcomments = (postID, callback) => {
//     setTimeout(() => {
//         console.log("comments fetched");
//         callback(null, {
//             _id: 4,
//             postId: postID,
//             title: "comment1",
//         });
//     }, 4000);
// };

// getUser((error, user) => {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log(user);

//     getPosts(user._id, (error, posts) => {
//         if (error) {
//             console.log(error);
//             return;
//         }

//         console.log(posts);

//         getcomments(posts[0]._id, (error, comments) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }

      
//         });
//     });
// });
// console.log("end");


//!callback hell ->  soln of callback promise -------Callback hell is a term in programming that describes code with many nested callbacks, making it difficult to read, understand, and maintain
//*pyramid of dome
console.log("start");

const getUser = () => {
    return new Promise((resolve)=>{
    setTimeout(() => {
        console.log("Users fetched");
        resolve( {
            _id: 1,
            name: "john doe",
            email: "j@gmail.com"
        });
        // callback("message: user fetch failed")
    }, 2000);
    })
};

const getPosts = (userId) => {
    return new Promise((resolve)=>{
    setTimeout(() => {
        console.log("posts fetched");
       resolve([
            {
                _id: 1,
                userId: userId,
                title: "post1",
            },
            {
                _id: 2,
                userId: userId,
                title: "post2",
            }
        ]);
    }, 3000);
    });
};


const getcomments = (postID,) => {
    return new Promise((resolve) =>{
    setTimeout(() => {
        console.log("comments fetched");
        resolve({
            _id: 4,
            postId: postID,
            title: "comment1",
        });
    }, 4000);
    })
};
//!promise chaining
    getUser()
    .then(user=>{
        console.log(user)
        return getPosts(user._id);
    })
     .then(posts => {
        console.log(posts);

        return getcomments(posts[0]._id);
    })
    .then(comments=>{
        console.log(comments)
    })
        .catch(error => {
        console.log(error)
    });
  
    
console.log("end");


