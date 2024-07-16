// Adding 100 para
// const t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.innerHTML = "This is para "+i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(t2-t1);


// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.innerHTML = "This is para "+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log(t4-t3);

// const t5 = performance.now();
// let frag = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.innerHTML = "This is para "+i;
//     frag.appendChild(newElement);
// }
// document.body.appendChild(frag);
// const t6 = performance.now();
// console.log(t6-t5);


function addPara(){
    let para = document.createElement('p');
    para.innerHTML = "JS is Single" ;
    document.body.appendChild(para);
}

function appendNewMsg(){
    let msg = document.createElement('p');
    msg.textContent = "Good Morning myself";
    document.body.appendChild(msg);
}

addPara();
appendNewMsg();