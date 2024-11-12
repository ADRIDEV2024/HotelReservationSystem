import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Room = sequelize.define('Room', {
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

const RoomModel = {
  Room,
  getRoomById: async (id) => {
    return await Room.findByPk(id);
  },
  getAllRooms: async () => {
    return await Room.findAll();
  }
}

function getRoomByNumber(number) {
  return RoomModel.Room.findOne({ where: { number } });
}

export { RoomModel, getRoomByNumber };
export default Room;
