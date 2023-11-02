const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueSpan.textContent = counterValue;
});
