document.getElementById('google-login').addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/auth/google';
  });

function showError(message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'alert alert-danger';
  alertBox.textContent = message;
  document.body.prepend(alertBox);

  setTimeout(() => alertBox.remove(), 5000); // Eliminar alerta después de 5 segundos
}
