import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  storage: './database/hotel.mysql',
});

export default { sequelize };
