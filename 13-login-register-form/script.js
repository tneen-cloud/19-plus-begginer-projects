const loginToggle = document.getElementById('loginToggle');
const registerToggle = document.getElementById('registerToggle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToLogin = document.getElementById('switchToLogin');

loginToggle.addEventListener('click', () => {
    loginToggle.classList.add('active');
    registerToggle.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
    registerToggle.classList.add('active');
    loginToggle.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginToggle.click();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful!');
    loginForm.reset();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = registerForm.querySelector('input[type="password"]').value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    alert('Registration successful!');
    registerForm.reset();
});

