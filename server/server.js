const express = require('express');
const cors = require('cors');
const jwtAuthRoutes = require('./router/jwtAuth');
const dashboardRoutes = require('./router/dashboard');
const dataRoutes = require('./router/data');

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARES
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// ROUTES
app.use('/jwtAuth', jwtAuthRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
