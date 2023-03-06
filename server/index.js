const express = require('express');
const cors = require('cors');
const pool = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES
//post new user
app.post('/', async (req, res) => {
  // res.json({ message: 'Hello from server!' });
  const {last_name, first_name, email, password} = req.body;
  try {
    const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if(checkUser.rows.length > 0){
      return res.status(401).json("User already exist");
    }
    
    const newUser = await pool.query("INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING * ", [last_name, first_name, email, password]);

    res.status(200).json({
      status: 'succes',
      data:newUser.rows[0]});
  } catch (err){
    console.log(err.message);
    res.send({status:"error"});
  }
});
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