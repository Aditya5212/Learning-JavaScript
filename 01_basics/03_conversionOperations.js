let score = "33abc"; //null->0 undefined->NaN true->1 string->NaN
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

// let isLoggedIn = 1; // 1->true, 0->false 
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);
// console.log(typeof(isLoggedIn));
// console.log(typeof(booleanLoggedIn));

/* 
Note: for a empty string type casted to Boolean value
 it gives false and for any string it gives true Boolean value. 
*/
// 
let isLoggedIn = ""; // ""->false, "Adi"->true
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);
// console.log(typeof(isLoggedIn));
// console.log(typeof(booleanLoggedIn));

// let someNum = 545;
// let someStr = String(someNum);
// console.log(someStr);
// console.log(typeof(someStr));


// ************************** Operations *******************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Aditya"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 54;

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
