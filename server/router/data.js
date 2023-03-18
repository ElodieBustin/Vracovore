const express = require('express');
const pool = require('../db');
const router = express.Router();
const checkFavorites = require('./../middlewares/checkFavorites');
const cors = require('cors');

router.get('/', async (req, res) => {
  try {
    const items = await pool.query('SELECT * FROM items ORDER BY name ASC');
    res.json(items.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

router.get('/category', async (req, res) => {
  try {
    const categories = await pool.query(
      'SELECT category FROM items GROUP BY category'
    );
    res.json(categories.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

router.get('/product/:id', async (req, res) => {
  const item_id = parseInt(req.params.id);
  const productItem = await pool.query('SELECT * FROM items WHERE id = $1', [
    item_id,
  ]);
  res.json(productItem.rows);
});

router.post('/addFavorites', cors(), async (req, res) => {
  const { item_id, user_id } = req.body;
  console.log('fonction add user_id', user_id);
  console.log('fonction add item_id', item_id);

  console.log(checkFavorites);

    const addToFavorite = await pool.query(
      'INSERT INTO favorite_items (user_id, item_id) VALUES ($1, $2) RETURNING id',
      [user_id, item_id]
    );
    res.json(addToFavorite.rows[0]);
    console.log('je suis bien ajouté', addToFavorite.rows);
});

router.post('/checkFavorites', cors(), async (req, res) => {
  const { item_id, user_id } = req.body;
  console.log('checkFavo item_id',item_id);
  console.log('checkFavo user_id',user_id);
  const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [user_id, item_id]);

  console.log(checkFavoriteData.rows)

  if(checkFavoriteData.rows.length > 0){
    console.log("Données présentes");
    return res.json(true);
  } else {
    console.log("Données manquantes");
    return res.json(false);
  }
});

router.get('/getfavorites/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const favoriteList = await pool.query(
      'SELECT * FROM items INNER JOIN favorite_items ON items.id = favorite_items.item_id WHERE favorite_items.user_id = $1', [userId]
    );
    res.json(favoriteList.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

module.exports = router;
