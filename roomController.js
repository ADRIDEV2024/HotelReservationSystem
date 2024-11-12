import { findAll, create, findById, update, remove } from '../models/room.js';

// Constantes para mensajes de error
const ERROR_MESSAGES = {
  ROOM_NOT_FOUND: 'Habitación no encontrada',
  INVALID_DATA: 'Datos inválidos',
  ROOM_EXISTS: 'Ya existe una habitación con ese número'
};

/**
 * Obtiene todas las habitaciones con filtros opcionales
 */
const getAllRooms = async (req, res, next) => {
  try {
    const { 
      type, 
      minPrice, 
      maxPrice, 
      isAvailable,
      sortBy = 'number',
      order = 'ASC',
      limit = 10,
      page = 1
    } = req.query;

    // Construir filtros
    const filters = {};
    if (type) filters.type = type;
    if (isAvailable) filters.isAvailable = isAvailable === 'true';
    if (minPrice) filters.price = { $gte: minPrice };
    if (maxPrice) filters.price = { ...filters.price, $lte: maxPrice };

    // Calcular offset para paginación
    const offset = (page - 1) * limit;

    const rooms = await findAll({
      filters,
      sortBy,
      order,
      limit: parseInt(limit),
      offset
    });

    // Agregar metadata
    const response = {
      data: rooms,
      pagination: {
        currentPage: parseInt(page),
        itemsPerPage: parseInt(limit),
        totalItems: rooms.length
      },
      metadata: {
        timestamp: new Date(),
        filters: filters
      }
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Crea una nueva habitación con validaciones
 */
const createRoom = async (req, res, next) => {
  try {
    const { number, type, price, capacity, amenities, description } = req.body;

    // Validaciones
    if (!number || !type || !price) {
      return res.status(400).json({
        success: false,
        message: ERROR_MESSAGES.INVALID_DATA
      });
    }

    // Verificar si ya existe una habitación con ese número
    const existingRoom = await findById(number);
    if (existingRoom) {
      return res.status(409).json({
        success: false,
        message: ERROR_MESSAGES.ROOM_EXISTS
      });
    }

    const newRoom = await create({
      number,
      type,
      price,
      capacity,
      amenities: amenities || [],
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      isAvailable: true,
      totalBookings: 0,
      reservations: [],
      status: 'active'
    });

    res.status(201).json({
      success: true,
      data: newRoom
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Obtiene una habitación por su ID
 */
const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await findById(id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: ERROR_MESSAGES.ROOM_NOT_FOUND
      });
    }

    res.json({
      success: true,
      data: room

    });
  } catch (error) {
    next(error);
  } 
}

export default { getAllRooms, createRoom, getRoomById };