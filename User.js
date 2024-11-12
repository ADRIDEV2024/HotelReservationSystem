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

const UserModel = {
  User,
  create: async (googleId, name) => {
    const user = await User.create({ googleId, name });
    return user;
  },
};

function getUserByGoogleId(googleId) {
  return User.findOne({ where: { googleId } });
}

export { UserModel, getUserByGoogleId }
export default User;
