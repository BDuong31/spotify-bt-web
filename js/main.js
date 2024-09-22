var togglerPassword = document.getElementById('toggler');
console.log(togglerPassword);
var passwordInput = document.getElementById('login-password');

togglerPassword.addEventListener('click', () => {
    if  (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        togglerPassword.classList.add("show_password_icon");
        togglerPassword.classList.remove("hide_password_icon");
    } else if (passwordInput.type === 'text'){
        passwordInput.type = 'password';
        togglerPassword.classList.add("hide_password_icon");
        togglerPassword.classList.remove("show_password_icon");
    }
})