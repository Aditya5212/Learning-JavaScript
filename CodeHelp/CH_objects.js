// function Rectangle(){
//     this.width = 1;
//     this.height = 2;
//     this.draw = function(){
//         console.log("Drawing a rectangle");
//     }
// }

// let RectangleObj = new Rectangle();
// console.log(RectangleObj);

// Math Object
// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.89))
// console.log(Math.abs(-2))

// String Object in JS
let lastName = "Dange";
// let strObj = new String("aditya");
// console.log(strObj); 
// console.log(lastName);
// console.log(typeof strObj);
// console.log(typeof lastName);
// console.log(lastName.length);
// console.log(lastName[0]);
// console.log(lastName.startsWith('Dan'));
// console.log(strObj.length);

// let msg = 
// `Hello ${lastName},

// Thanks for the Opurtunity

// Regards,
// love`;

// console.log(msg);


//Js Arrays
// let numbers = [1,2,3,4,5,8,9];
// console.log(numbers)
// numbers.push(9)
// console.log(numbers)
// numbers.unshift(0)
// numbers.splice(2,0,'a','b','c')
// console.log(numbers)


// let courses = [
//     {no:1, naam : "love"},
//     {no:2, naam : "aditya"},
//     {no:3, naam : "dange"}
// ]
// console.log(courses)

// // console.log(courses.indexOf({no:1, naam : "love"}));

// let courseFind = courses.find(function(courses){
//     return courses.naam == "love";
// })

// let course = courses.find(courses=> courses.naam == "love")
    

// console.log(courseFind);

// let num =[1,2,3,5,6,7,8,9,71];
// num.pop()
// console.log(num)
// num.shift()
// console.log(num)
// num.splice(3,1)
// console.log(num)


// let numbers = [1,2,3,4,5,6]
// let numbers2 = numbers;
// // numbers = [];
// numbers.length = 0;
// numbers.splice(0,numbers.length);
// console.log(numbers)
// console.log(numbers2)

//combining and slicing Arrays

let first = [1,2,3,4];
let second = [5,6,7,8];
// let third = first.concat(second)
let third = [...second,...first];
// for(let val of third){
//     console.log(val);
// }

// third.forEach(element => {
//     console.log(element)
// });
// const joined = third.join(',');
// console.log(joined)


// console.log(third)

// let sorted=third.sort()
// console.log(sorted)
// console.log(third)
// let reversed=sorted.reverse()
// console.log(reversed)


// sorting object arrays
// let namesOF = [
//     {no:3, naam : "dange"},
//     {no:2, naam : "aditya"},
//     {no:8, naam : "yash"},
//     {no:4, naam : "shankar"},
//     {no:1, naam : "love"}
// ]

// let sortedArr = namesOF.sort((a,b)=> a.no - b.no);
// let sortedArrRev = namesOF.sort((a,b)=> b.no - a.no);
// let sortArrNew = namesOF.sort((a,b) => {
//     if(a.naam > b.naam) return 1;
//     if(a.naam < b.naam) return -1;
// })
// console.log(sortArrNew)
// // console.log(sortedArr)

// // console.log(namesOF)

// filtering Array
// let numb = [1,2,-5,-8];
// let positive = numb.filter((val)=> val<0);
// console.log(positive)

let numb = [1,2,5,8];
let map1 = numb.map(function(val){
    console.log("student_no"+val)
})``