document.getElementById('google-login').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/auth/google';
  });

document.getElementById('logout').addEventListener('click', () => {
  fetch('http://localhost:3000/auth/logout', { method: 'POST' })
   .then(response => {
      if (response.ok) {
        window.location.href = '/';
      } else {
        throw new Error('Error al cerrar sesión');
      }
    })
   .catch(error => {
      console.error('Error al cerrar sesión:', error);
    })});


document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    });
function showError(message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'alert alert-danger';
  alertBox.textContent = message;
  document.body.prepend(alertBox);

  setTimeout(() => alertBox.remove(), 5000); // Eliminar alerta después de 5 segundos
}
