const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені!');
    } else {
        const user = {
            email: email.value,
            password: password.value
        }
        console.log(user);
        event.currentTarget.reset();
    }
});