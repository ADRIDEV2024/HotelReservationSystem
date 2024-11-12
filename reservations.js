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
      await fetch(`http://localhost:3000/reservations/${reservationId}`, { method: 'DELETE', credentials: 'include' });
      alert('Reserva cancelada');
      window.location.reload();
    } catch (error) {
      console.error('Error al cancelar reserva:', error);
    }
  }
  
