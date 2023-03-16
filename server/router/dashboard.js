const routerDash = require('express').Router();
const pool = require('../db');
const authorization = require('../middlewares/authorization');

routerDash.get('/', authorization, async(req, res)=>{
    try {

        const user = await pool.query("SELECT id, last_name, first_name FROM users WHERE id = $1", [req.user]);
        res.json(user.rows[0]);
        console.log(user.rows);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server error");
    }
})

module.exports = routerDash;