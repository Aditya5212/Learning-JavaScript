const coding = ["js","ruby","cpp","java","Python","Go","rust"];

// coding.forEach(function(item){
//     console.log(item);
// })


// coding.forEach(
//     (language) => {
//         console.log(language);
//     }
// )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item ,index ,arr) => {
//     console.log(item,index,arr);
// })

const myCode = [
    {
        languageName : "js",
        val : 1
    },
    {
        languageName : "cpp",
        val : 2
    },
    {
        languageName : "py",
        val : 3
    },
    {
        languageName : "css",
        val : 4
    },
    {
        languageName : "html",
        val : 5
    }
]

myCode.forEach( (item)=>{
    console.log(`${item.languageName} : ${item.val}`);
})