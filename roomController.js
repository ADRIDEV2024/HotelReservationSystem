import { findAll, create } from '../models/room.js';

const getAllRooms = async (req, res) => {
  const rooms = await findAll();
  const createdOn = new Date();
  const modifiedOn = new Date();
  const isAvailable = true;
  const totalBookings = 0;
  const reservations = [];
  res.json(rooms, createdOn, modifiedOn,
     isAvailable, totalBookings, reservations);
};

const createRoom = async (req, res) => {
  const { number, type, price } = req.body;
  const newRoom = await create({ number, type, price });
  res.status(201).json(newRoom);
};

export default { getAllRooms, createRoom };
