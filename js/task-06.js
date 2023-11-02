const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
    if(event.currentTarget.dataset.length == event.currentTarget.value.length) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
});