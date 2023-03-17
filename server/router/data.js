const express = require('express');
const pool = require('../db');

const router = express.Router();

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

router.post('/addFavorites', async (req, res) => {
  const { item_id, user_id } = req.body;
  console.log(user_id);
  console.log(item_id);

    const addToFavorite = await pool.query(
      'INSERT INTO favorite_items (user_id, item_id) VALUES ($1, $2) RETURNING id',
      [user_id, item_id]
    );
    res.json(addToFavorite.rows[0]);
    console.log('je suis bien ajouté', addToFavorite.rows);
});

router.post('/checkFavorites', async (req, res) => {
  const { userId, itemId } = parseInt(req.body);
  const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [userId, itemId]);

  if(checkFavoriteData.rows.length > 0){
    console.log("Doublon !");
    return res.status(401).json(true);
  } else {
    console.log("Pas de doublon !");
    return res.status(200).json(false);
  }
});

router.get('/getfavorites/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
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
