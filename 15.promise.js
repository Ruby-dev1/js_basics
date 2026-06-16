//!promise
//*states
//?pending
//?fullfilled
//?rejected
//*use cases- fetch(API )- when called is done from frontend to backend for api request

//*represents the future - suceesion or failure of code 

//console.log("start")
// const promise = new Promise((resolve, reject)=>{
//     //async logic
//     setTimeout(()=>{
//        resolve("success");
//        reject("error");
//     },2000)

// });
// console.log("promise");

// //!handling promise
// promise
// .then((data)=>{
//  console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finally")
// });

// console.log("end");

// console.log("start");

// const FetchUser = () => {
//     return new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log("Users fetched");
//         const error = err;
//         if(error){
//             reject(("message: fetchuser is failed"))
//         }
//         resolve( {
//             _id: 1,
//             name: "john doe",
//             email: "j@gmail.com"
//         });
//         // callback("message: user fetch failed")
//     }, 2000);
//     })
// };

// const FetchPosts = (userId) => {
//     return new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log("posts fetched");
//        resolve([
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
//     }, 3000);
//     });
// };


// const Fetchcomments = (postID,) => {
//     return new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log("comments fetched");
//         resolve({
//             _id: 4,
//             postId: postID,
//             title: "comment1",
//         });
//     }, 4000);
//     })
// };
// //!promise chaining
//     FetchUser()
//     .then(user=>{
//         console.log(user)
//         return FetchPosts(user._id);
//     })
//      .then(posts => {
//         console.log(posts);

//         return Fetchcomments(posts[0]._id);
//     })
//     .then(comments=>{
//         console.log(comments)
//     })
//         .catch(error => {
//         console.log(error)
//     });
  
    
// console.log("end");

//!fetch() //*use cases- fetch(API )- when called is done from frontend to backend for api req

fetch("https://jsonplaceholder.typicode.com/users/9")
    .then((response)=>{
        console.log(response);
        return response.json();

    })
    .then((user)=>{
        console.log(user);
    })
    .catch((error=>{
        console.log(error)
    }))


    //!async/await---- syntatic sugar of promise
    //!try/catch


    // console.log("start")

    // const a = async()=>{
    //     try{
    //     const user = await FetchUser();
    //     console.log(user);
    //     const posts = await FetchPosts(user._id);
    //     console.log(posts);
    //     const commts = await Fetchcomments(posts[1]._id)
    //     } catch (error){
    //         console.log(error);
    //     } finally {
    //         console.log("finally");
    //     }
    // };
    // a();
    // console.log("end");
    // fetch("https://jsonplaceholder.typicode.com/users/9")
    // .then((response)=>{
    //     console.log(response);
    //     return response.json();

    // })
    // .then((user)=>{
    //     console.log(user);
    // })
    // .catch((error=>{
    //     console.log(error)
    // }))
//!most importnt syntax --- async/await
    console.log("start")

    // const b = async()=>{
    //     try{
    //         const response = await fetch(("https://jsonplaceholder.typicode.com/users/9"));
    //         //console.log(response);
    //         const user = await response.json();
    //         console.log(user)
    //     }catch(error){
    //         console.log(error)
    //     }
    // };
    // b();
    // console.log("end")

     const b = async()=>{
        try{
            const response = await fetch(("https://jsonplaceholder.typicode.com/posts"));
            //console.log(response);
            const post = await response.json();
            console.log(post[3]);

        
            
            

            const cmtsresponse  = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post[3].id}`)
       
            console.log(await cmtsresponse.json());
            
        }catch(error){
            console.log(error)
        }
    };
    b();
    

    console.log("end")


    //todo: event loop
//     1. Call Stack (runs NOW)
// 2. Microtask Queue (Promises)
// 3. Macrotask Queue (setTimeout, events)

//  Run all synchronous code first
// 2. Empty microtasks completely
// 3. Then run one macrotask
// 4. Repeat