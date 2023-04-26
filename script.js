document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação básica de login
    if (email === 'usuario@example.com' && password === 'senha') {
        alert('Login bem-sucedido!');
    } else {
        alert('Email ou senha incorretos!');
    }
});
