//!event loop -> how the js performs asynch task cz of event loop
// *callstack
//* web apis : timer, DOM, promise,fetch, geolocation
// settimeout()-. functions are stored in timer and the countdown start in timer, and then after the countdown finsihed, 
// it sends it to the task queue, 

//*task queue -> FIFO 
//? macro/ callback queue-> settimeout, events
//?microtask queue-> promises,fetch

//!  callstack always gives first priority to microtask, it only goes back to macro once the micro becomes empty
// web apis can't directly push back to the callstack , it first push to the task queue
//so, whenever the the callstack gets empty, it finished its execution, it then look at the task queue
//popped out and pushed it to the callstack and finished the execution

//*event loop 
//it takes the from task queue to callstack
// the overall process is monitored by the event loop , 



// console.log("a");
// setTimeout(()=>{
//     console.log("processing")
// },2000);
// //settimeout make sures the task runs at 2 secs but not before 2 secs
// console.log("b") // order of execution will be a
//                                             //b
//                                             //processing
  
// fetch("https://jsonplaceholder.typicode.com/users/9")
//     .then((response)=>{
//         console.log(response);
//         return response.json();

//     })
//     .then((user)=>{
//         console.log(user);
//     })
//     .catch((error=>{
//         console.log(error)
//     }))
    
    

//   getUser()
//     .then(user=>{
//         console.log(user)
//         return getPosts(user._id);
//     })
//      .then(posts => {
//         console.log(posts);

//         return getcomments(posts[0]._id);
//     })
//     .then(comments=>{
//         console.log(comments)
//     })
//         .catch(error => {
//         console.log(error)
//     });  
// const b = async()=>{
//         try{
//             const response = await fetch(("https://jsonplaceholder.typicode.com/posts"));
//             //console.log(response);
//             const post = await response.json();
//             console.log(post[3]);

        
            
            

//             const cmtsresponse  = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post[3].id}`)
       
//             console.log(await cmtsresponse.json());
            
//         }catch(error){
//             console.log(error)
//         }
//     };
//     b();



console.log("1")
setTimeout(()=>{
    console.log("2");
    Promise.resolve().then(()=>{
        console.log("3")
    })
},0);
Promise.resolve().then(()=>{ // even if the same task is done, it gives priority to first task queue- FIFO
    console.log("4");
});
Promise.resolve().then(()=>{
    console.log("5");
});
console.log("6")
    

