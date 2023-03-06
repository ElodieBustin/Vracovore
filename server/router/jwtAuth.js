const router = require('express').Router();
const pool = require('./../db');
const bcrypt = require('bcrypt');

//register

router.post('/', async (req, res) => {

    const {last_name, first_name, email, password} = req.body;


    try {
      const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

      if(checkUser.rows.length > 0){
        return res.status(401).json("User already exist");
      }
      
      const saltRound = 10;

      //La génération prend un peu de temps, donc on await
      const salt = await bcrypt.genSalt(saltRound);
      //Idem, cela prend du temps
      const bcryptPassword = await bcrypt.hash(password, salt);


      const newUser = await pool.query("INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING * ", [last_name, first_name, email, bcryptPassword]);
  
      res.status(200).json({
        status: 'succes',
        data:newUser.rows[0]});
    } catch (err){
      console.log(err.message);
      res.status(500).send("Server error");
    }
  });

module.exports = router;