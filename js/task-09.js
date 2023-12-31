function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const backgroundColorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', event => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  backgroundColorSpan.textContent = randomHexColor;
});

