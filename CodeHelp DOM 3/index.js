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

async function utility(){
    let delhiMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delhi Mausam is very hot");
        },1000)
    })

    let hydMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hydrabad is Cool");
        },5000)
    })

    let DM = await delhiMausam;
    let HM =  hydMausam;
    return [DM,HM];
}
