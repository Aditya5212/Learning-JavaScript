//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //gives false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

/*
Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"

*/


// ************************ Memory Management in JS **************************

// Stack (Primitive) , Heap (Non-primitive)

// let myName = "AdityaDange";
// let newName = myName;
// // console.log(myName);
// // console.log(newName);
// newName = "MadReaper";
// console.log(myName);
// console.log(newName);

/* when assigning value to primitive data type it makes a copy of the original var
 and assigns new value to it not affecting the root variable.
 New var with changed value is stacked upon old value
 */

let userOne = {
    userEmail: "aditya@google.com",
    upi: "adi@ybl"
};

let userTwo = userOne;
// console.log(userTwo.userEmail);
// console.log(userTwo.upi)

/* Suppose doing some change in userTwo as both 
userOne and userTwo refers to same memory address in the heap
*/
userTwo.userEmail = "pinu@google.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);

// AS E-mail in both userOne and userTwo is changed this prooves it.


