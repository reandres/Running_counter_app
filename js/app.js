const counterNode = document.querySelector('.js-counter');
const incrBtnNode = document.querySelector('.js-incr-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');
let counter = 0;

function render() {
    counterNode.innerText = counter;
}

function increment() {
    counter++;
} 

function clear() {
    counter = 0;
} 

incrBtnNode.addEventListener('click', () => {
    increment();
    render();
});

clearBtnNode.addEventListener('click', () => {
    clear();
    render();
});