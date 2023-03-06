const express = require('express');
const cors = require('cors');
const pool = require('./db');
const router = require('./router/router');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES
// register and login routes

app.use("/auth", require("./router/jwtAuth"));

//get all users
app.get('/', async (req, res) => {
  try {
    const allUser = await pool.query('SELECT * FROM users');
    res.json(allUser.rows);

  } catch (err){
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});