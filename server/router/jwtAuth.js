const express = require("express");
const router = express.Router();
const pool = require('./../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('./../utils/jwtGenerator');
const checkInfos = require('../middlewares/checkInfos');
const authorization = require('../middlewares/authorization');

//register
router.post('/register', checkInfos, async (req, res) => {

    const {last_name, first_name, email, password} = req.body;

    try {
      const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      console.log(checkUser);

      if(checkUser.rows.length > 0){
        return res.status(401).json("User already exist");
      }
      
      const saltRound = 10;

      //La génération prend un peu de temps, donc on await
      const salt = await bcrypt.genSalt(saltRound);
      //Idem, cela prend du temps
      const bcryptPassword = await bcrypt.hash(password, salt);


      const newUser = await pool.query("INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING * ", [last_name, first_name, email, bcryptPassword]);
      console.log(newUser.rows[0]);

      const token = jwtGenerator(newUser.rows[0].id);
  
      res.status(200).json({
        status: 'succes',
        token,
        data:newUser.rows[0]});
    } catch (err){
      console.log(err.message);
      res.status(500).send("Server error");
    }
  });

router.post('/login', checkInfos, async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(user.rows.length === 0){
            return res.status(401).json("Aucun compte pour cette adresse mail");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword){
            return res.status(401).json("Le mot de passe ou l'email est incorrect");
        }
        const token = jwtGenerator(user.rows[0].id);
        res.json({token});

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Servor error');
    }
})

router.post('/verify', authorization, async (req, res) =>{
    try {
        res.json(true);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Servor error');
    }
})

module.exports = router;