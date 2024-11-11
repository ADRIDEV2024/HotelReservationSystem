import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config';

const User = sequelize.define('User', {
  googleId: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  mfaSecret: {
    type: DataTypes.STRING,
  },
  isMfaEnabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
