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

export default Room;
