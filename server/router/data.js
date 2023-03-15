const routerData = require('express').Router();
const pool = require('../db');

routerData.get('/', async (req, res)=>{
    try {

        const items = await pool.query("SELECT * FROM item");
        res.json(items.rows);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server error");
    }
});

routerData.get('/category', async (req, res) => {
    try{
        const categories = await pool.query("SELECT category FROM item GROUP BY category");
        console.log(categories.rows);
        res.json(categories.rows)
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server error");
    }
})

module.exports = routerData;