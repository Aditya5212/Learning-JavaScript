const user = {
    username : "Aditya",
    price : 999,
    
    welcomeMsg : function() {
        // console.log(`${this.username}, Welcome to the website!`);
        // console.log(this)
    }
}
// console.log(this)
// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();


//Browser globel object : Window Object

// function chai() {
//     const userName = "Adi"
//     console.log(this)
// }
// chai()

// function chai() {
//     const userName = "Adi"
//     console.log(this.userName)
// }
// chai()

// const chai1 = function() {
//         const userName = "Adi"
//         console.log(this.userName)
//     }
// chai1()

const chai2 = () => {
    const userName = "Adi"
    // console.log(this);
    console.log(this.userName)
}
chai2()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,5))

// Implicete return

// const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(8,9))

// const objRtn = () => ({userName:"Aditya"})

// console.log(objRtn())
