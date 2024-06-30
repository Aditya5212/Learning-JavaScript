const tinderUser =  new Object(); //singleton Object

// const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Adi";
tinderUser.isLoggedIn = true;


// console.log(tinderUser);

const regularUser = {
    email : "Kill@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Aditya",
            lastName : "Dange"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {...obj1,...obj1}
const obj4 = {obj1,obj2}

// console.log(obj3);
// console.log(obj4);

const obj5 = Object.assign({},obj1,obj2);

// console.log(obj5);


const user = [
    {
        id : 1,
        email : "adi@gmail.com"
    },
    {
        id : 2,
        email : "adi@gmail.com"
    },
    {
        id : 3,
        email : "adi@gmail.com"
    },
    {
        id : 4,
        email : "adi@gmail.com"
    }
]

// console.log(user[2].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



// *****************************************************************************************

//Destructuring

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor : instructor} = course;

console.log(instructor);
