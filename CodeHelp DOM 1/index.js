// let content = document.querySelectorAll('h2');
//     content.forEach(function(it){
//     it.addEventListener('click',function(it){
//         it.target.style.color = 'red';
//     })
// })

// document.addEventListener('click',()=>{
//     console.log("I have clicked on Document");
// })

// function print(){
//     console.log("Hi there !!!");
// }

// document.addEventListener('click',print);
// document.removeEventListener('click',print);

// let preventanchor = document.querySelectorAll('a');
// // console.log(preventanchor);
// preventanchor[2].addEventListener('click',(Event)=>{
//     Event.preventDefault();
// })
// preventanchor[1].addEventListener('click',(Event)=>{
//     Event.preventDefault();
// })

let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para ' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=10; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     if(event.target.nodeName === 'SPAN') {
//         console.log('span pr click kia hai' + event.target.textContent);
//     }
// });



// for(let i=1;i<=20;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is para "+ i;
//     newElement.addEventListener('click',function(Event){
//         console.log("i clicked");
//     })
//     divtag.appendChild(newElement);
// }
// document.body.appendChild(divtag);
