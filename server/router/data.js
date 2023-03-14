const routerData = require('express').Router();
const pool = require('../db');

routerData.get('/', async (req, res)=>{
    try {

        const items = await pool.query("SELECT * FROM item");
        console.log(items.rows);
        res.json(items.rows);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server error");
    }
})

module.exports = routerData;