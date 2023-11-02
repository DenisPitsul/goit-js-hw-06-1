function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsInput = document.querySelector('#controls input');
const dataCreateBtn = document.querySelector('[data-create]');
const dataDestroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

dataCreateBtn.addEventListener('click', () => {
  if (Number(controlsInput.value.trim()) > controlsInput.max || Number(controlsInput.value.trim()) < controlsInput.min) {
    alert('Please enter number from 1 to 100');
    return;
  }
  createBoxes(Number(controlsInput.value));
  controlsInput.value = '';
});

dataDestroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  controlsInput.value = '';
});

function createBoxes(amount) {
  let boxesHtml = "";
  for(let i = 0; i < amount; i++) {
    const divWidth = 30 + i * 10;
    const boxHtml = `<div style="width: ${divWidth}px; height: ${divWidth}px; background-color: ${getRandomHexColor()}"></div>\n`;
    boxesHtml += boxHtml;
  }
  boxes.insertAdjacentHTML('beforeend', boxesHtml);
}
