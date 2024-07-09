// for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is a good number");
//     }
//     console.log("Index : ",i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log("Index : ",i," and ",j);
//     }
// }

// let myArr = ["flash","batman","superman","ironman"];
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

// Break and Continue

// for(let i=1;i<10;i++){
//     if(i==5){
//         console.log("5 is a good number");
//         break;
//     }
//     console.log(`Value of i : ${i}`);
// }

for(let i=1;i<10;i++){
    if(i==5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i : ${i}`);
}