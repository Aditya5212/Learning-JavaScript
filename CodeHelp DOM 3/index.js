// console.log("Good Morning");
//Async code
// setTimeout(function(){
//     console.log('third');
// },10)

// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// let myPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside promise1");
//     },5000)
//     // resolve(1998);
//     // reject(new Error("Bhai Error aai hai !"));
// })

// let myPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside promise2");
//     },3000)
//     // resolve(1998);
//     // reject(new Error("Bhai Error aai hai !"));
// })
// console.log('pehela');


// let waadaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("I am inside promise1 ,setTimeout1 Started");
//     },2000)
//     resolve("true");
// })

// let output = waadaa1.then(()=>{
//     let waadaa2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("setTimeout2 Started,Waadaa 1 has successfully executed");
//         },3000);
//         resolve("Waadaa 2 resolved");
//     })
//     return waadaa2;
// })
// output.then((value)=>{
//     // console.log(value);    
//     console.log("Waadaa 1 has successfully executed")
// })


// async function abcd(){
//     return "lone_wolf";
// }

// async function utility(){
//     let delhiMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Delhi Mausam is Sunny");
//         },5000)
//     })

//     let hydMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hydrabad Mausam is Chill");
//         },8000)
//     })
//     let DL = await delhiMausam;
//     let HYD = await hydMausam;
//     return [DL,HYD];
// }

// Async functions and execution order

// function resolveAfter2Seconds() {
//     console.log("starting slow promise");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("slow");
//         console.log("slow promise is done");
//       }, 2000);
//     });
//   }
  
//   function resolveAfter1Second() {
//     console.log("starting fast promise");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("fast");
//         console.log("fast promise is done");
//       }, 1000);
//     });
//   }
  
//   async function sequentialStart() {
//     console.log("== sequentialStart starts ==");
  
//     // 1. Start a timer, log after it's done
//     const slow = resolveAfter2Seconds();
//     console.log(await slow);
  
//     // 2. Start the next timer after waiting for the previous one
//     const fast = resolveAfter1Second();
//     console.log(await fast);
  
//     console.log("== sequentialStart done ==");
//   }
  
//   async function sequentialWait() {
//     console.log("== sequentialWait starts ==");
  
//     // 1. Start two timers without waiting for each other
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
  
//     // 2. Wait for the slow timer to complete, and then log the result
//     console.log(await slow);
//     // 3. Wait for the fast timer to complete, and then log the result
//     console.log(await fast);
  
//     console.log("== sequentialWait done ==");
//   }
  
//   async function concurrent1() {
//     console.log("== concurrent1 starts ==");
  
//     // 1. Start two timers concurrently and wait for both to complete
//     const results = await Promise.all([
//       resolveAfter2Seconds(),
//       resolveAfter1Second(),
//     ]);
//     // 2. Log the results together
//     console.log(results[0]);
//     console.log(results[1]);
  
//     console.log("== concurrent1 done ==");
//   }
  
//   async function concurrent2() {
//     console.log("== concurrent2 starts ==");
  
//     // 1. Start two timers concurrently, log immediately after each one is done
//     await Promise.all([
//       (async () => console.log(await resolveAfter2Seconds()))(),
//       (async () => console.log(await resolveAfter1Second()))(),
//     ]);
//     console.log("== concurrent2 done ==");
//   }
  
//   sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
//   // wait above to finish
//   setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"
  
//   // wait again
//   setTimeout(concurrent1, 7000); // same as sequentialWait
  
//   // wait again
//   setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
  





// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

// async function getData() {
//     const url = 'https://covid-193.p.rapidapi.com/countries';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '60486ee99amsh0373aaed9d71eb2p186cdbjsn6c21d837e984',
//             'x-rapidapi-host': 'covid-193.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
//   }
  