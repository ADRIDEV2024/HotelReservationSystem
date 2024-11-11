import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import Room from './room.js';

const Reservation = sequelize.define('Reservation', {
  guestName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Reservation.belongsTo(Room, { foreignKey: 'roomId' });

export default Reservation;
