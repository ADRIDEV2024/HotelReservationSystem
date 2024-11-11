import { findAll, create } from '../models/room.js';

const getAllRooms = async (req, res) => {
  const rooms = await findAll();
  res.json(rooms);
};

const createRoom = async (req, res) => {
  const { number, type, price } = req.body;
  const newRoom = await create({ number, type, price });
  res.status(201).json(newRoom);
};

export default { getAllRooms, createRoom };
