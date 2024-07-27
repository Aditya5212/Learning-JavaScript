let count = document.querySelector('#counter');

const increment = function(){
    // Get the value from UI
    let value = parseInt(count.innerText);
    value=value+1;
    // Set the value to UI
    count.innerText = value;
};

const decrement = function(){
    // Get the value from UI
    let value = parseInt(count.innerText);
    value=value-1;
    // Set the value to UI
    count.innerText = value;
};