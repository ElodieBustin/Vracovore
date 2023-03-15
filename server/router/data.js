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
});

routerData.get('/product/:id', async (req, res) => {
    const item_id = parseInt(req.params.id);
    const productItem = await pool.query("SELECT * FROM item WHERE id = $1", [item_id]);
    console.log(productItem.rows);
    res.json(productItem.rows);
});


module.exports = routerData;