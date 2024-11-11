import { create, findAll, findByPk } from '../models/Reservation.js';
import Room, { findByPk as _findByPk } from '../models/room.js';

const createReservation = async (req, res) => {
  const { guestName, checkIn, checkOut, roomId } = req.body;
  
  const room = await _findByPk(roomId);
  if (!room || !room.isAvailable) {
    return res.status(400).json({ message: 'Habitación no disponible' });
  }

  const reservation = await create({ guestName, checkIn, checkOut, roomId });
  room.isAvailable = false;
  await room.save();

  res.status(201).json(reservation);
};

const getAllReservations = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const reservations = await findAll({ include: Room });
  res.json(reservations);
};

const cancelReservation = async (req, res) => {
  const { id } = req.params;

  const reservation = await findByPk(id);
  if (!reservation) {
    return res.status(404).json({ message: 'Reserva no encontrada' });
  }

  const room = await _findByPk(reservation.roomId);
  room.isAvailable = true;
  await room.save();

  await reservation.destroy();
  res.json({ message: 'Reserva cancelada' });
};

export default { createReservation, getAllReservations, cancelReservation };
