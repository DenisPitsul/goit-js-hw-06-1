const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = event.currentTarget.elements.email;
    const passwordInput = event.currentTarget.elements.password;

    if (emailInput.value === '' || passwordInput.value === "") {
        alert('Всі поля повинні бути заповнені!');
    } else {
        const user = {
            email: emailInput.value,
            password: passwordInput.value
        }
        console.log(user);
        event.currentTarget.reset();
    }
});