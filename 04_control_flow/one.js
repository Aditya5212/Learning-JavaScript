// if 
// const isUserLoggedIn = true;
// if(true){
//     console.log("User is Active");
// }else{
//     console.log("User is not Active");
// }

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("test2");


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if(loggedInFromFacebook || loggedInFromGoogle){
    console.log("User is logged in from social media")
}


if(userLoggedIn && debitCard){
    console.log("User is logged in and has debit card, Allow user to buy products");
}