const express = require('express');
const cors = require('cors');
const pool = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES
//post new todo
app.post('/', async (req, res) => {
  // res.json({ message: 'Hello from server!' });
  try {
    const {last_name, first_name, email, password} = req.body;
    const newUser = await pool.query("INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING * ", [last_name, first_name, email, password]);
    res.json(newUser.rows[0]);
  } catch (err){
    console.log(err.message);
  }
});
//get all todos
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