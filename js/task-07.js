const fontSizeControlInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', event => {
    const value = event.currentTarget.value;
    textSpan.style.fontSize = `${value}px`;
});
