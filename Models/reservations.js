document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.getElementById('reservations-table').querySelector('tbody');
    try {
      const response = await fetch('http://localhost:3000/reservations', { credentials: 'include' });
      const reservations = await response.json();
      reservations.forEach((res, index) => {
        const row = `
          <tr>
            <td>${index + 1}</td>
            <td>${res.Room.number}</td>
            <td>${new Date(res.checkIn).toLocaleDateString()}</td>
            <td>${new Date(res.checkOut).toLocaleDateString()}</td>
            <td><button class="btn btn-danger" onclick="cancelReservation(${res.id})">Cancelar</button></td>
          </tr>
        `;
        tableBody.innerHTML += row;
        tableBody.querySelector('tbody').appendChild(row);
        tableBody.querySelector(`button[onclick="cancelReservation(${res.id})"]`).addEventListener('click', () => {
          cancelReservation(res.id);
        tableBody.removeChild(row);
      });
    } catch (error) {
      console.error('Error al cargar reservas:', error);
    }
  });
  
async function cancelReservation(reservationId) {
  try {
    const response = await fetch(`http://localhost:3000/reservations/${reservationId}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (response.ok) {
      showAlert('Reserva cancelada exitosamente.', 'success');
      window.location.reload();
    } else {
      throw new Error('No se pudo cancelar la reserva.');
    }
  } catch (error) {
    showAlert('Error al cancelar la reserva. Intenta nuevamente.', 'danger');
  }
}

// Función para mostrar alertas visuales
function showAlert(message, type) {
  const alertBox = document.createElement('div');
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;
  document.querySelector('.container').prepend(alertBox);

  setTimeout(() => alertBox.remove(), 5000); // Eliminar alerta después de 5 segundos
}

