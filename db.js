import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  storage: './database/hotel.mysql',
});

const db = {};

db.Room = sequelize.define('Room', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

db.Reservation = sequelize.define('Reservation', {
  guestName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkIn: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  checkOut: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  roomId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Room',
      key: 'id',
    },
    allowNull: false,
  },
});
db.Room.hasMany(db.Reservation);

export default { sequelize };
