const arr = [1,2,3,4,5];

const myTotal = arr.reduce(function(acc,cur){
    // console.log(`acc:${acc} and cur:${cur}`);
    return acc + cur
},0)

// const myNums = arr.reduce((acc, cur) => acc + cur,100);
// console.log(myNums);

const shoppingCart = [
    {
        itemName :"py course",
        price :999
    },
    {
        itemName :"js course",
        price :1999
    },
    {
        itemName :"mob dev course",
        price :9999
    },
    {
        itemName :"ds course",
        price :2999
    }
];

const Total = shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(Total);

