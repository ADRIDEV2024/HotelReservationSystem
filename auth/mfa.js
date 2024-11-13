document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/mfa/setup', { credentials: 'include' });
      const data = await response.json();
      document.getElementById('qr-container').innerHTML = `<img src="${data.qrCode}" alt="QR Code">`;
    } catch (error) {
      console.error('Error al cargar QR:', error);
    }
  });
  
  document.getElementById('mfa-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = document.getElementById('mfa-code').value;
    try {
      const response = await fetch('http://localhost:3000/auth/mfa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ token: code }),
      });
      const data = await response.json();
      document.getElementById('mfa-message').textContent = data.message;
    } catch (error) {
      document.getElementById('mfa-message').textContent = 'Error al verificar MFA.';
      console.error(error);
    }
  });
  