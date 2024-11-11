import express from 'express';
import { json } from 'body-parser';
import { sequelize } from './database/db.js';
import roomRoutes from './routes/roomRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(json());

// Rutas
app.use('/rooms', roomRoutes);
app.use('/reservations', reservationRoutes);

// Iniciar servidor y sincronizar base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
