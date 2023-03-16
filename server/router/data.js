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
        res.json(categories.rows)
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Server error");
    }
});

routerData.get('/product/:id', async (req, res) => {
    const item_id = parseInt(req.params.id);
    const productItem = await pool.query("SELECT * FROM item WHERE id = $1", [item_id]);
    res.json(productItem.rows);
});

routerData.post('/addFavorites', async (req, res) => {
    //try/catch pour check doublon
    const { userId, itemId } = req.body;
    const result = await pool.query(
      'INSERT INTO favorite_items (user_id, item_id) VALUES ($1, $2) RETURNING id',
      [userId, itemId]
    );
    res.json(result.rows[0]);
    
  });

  routerData.get('/listFavorites', async (req, res) =>{
    try {
        const favoriteList = await pool.query("SELECT * FROM item INNER JOIN favorite_items ON item.id = favorite_items.item_id WHERE favorite_items.user_id = 2");
        res.json(favoriteList.rows);
        console.log(favoriteList);
    } catch (error) {
        console.log(error.message)
    }
  })

module.exports = routerData;