import passport, { use, serializeUser, deserializeUser } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { findOne, create, findByPk } from './models/User.js';

// Configuración de Google OAuth
use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await findOne({ where: { googleId: profile.id } });
        if (!user) {
          user = await create({ googleId: profile.id, name: profile.displayName });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// Serializar y deserializar usuarios
serializeUser((user, done) => done(null, user.id));
deserializeUser(async (id, done) => {
  try {
    const user = await findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


export default passport;
