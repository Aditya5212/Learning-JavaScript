// singleton (Constructor method)
// Object.create

//Object Literal

const mySym = Symbol("key1")

const JsUser = {
    name :"Aditya",
    "full Name" : "Aditya Dange",
    [mySym] : "myKey1",
    age : 20,
    location : "Pune",
    email : "adi@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym]));

JsUser.email = "killHero@gmail.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email = "killTheHero@gmail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full Name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());