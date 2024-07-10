// for of loop
// ["","",""]

// const arr = [1,2,3,4,5];
// for (const val of arr) {
//      console.log(val);
// }


// const greeting = "hello World";
// for (const i of greeting) {
//     if(i===' '){
//         continue;
//     }
//     console.log(`Each char is ${i}`);
// }

//Maps => unique value and have the order we set
const map = new Map();
map.set('name','John');
map.set('age',30);
map.set('city','New York');
// console.log(map);

for (const key in map) {
    console.log(key);
}

// for (const [key,value] of map) {
//     console.log(key ,":->",value);
// }

const obj = {
    game1 : "spiderMan",
    game2 : "God of War",
    game3 : "GTA"
}

// for (const gm of obj) {
//     console.log(gm);
// }