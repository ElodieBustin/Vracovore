const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await pool.query('SELECT * FROM item');
    res.json(items.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

router.get('/category', async (req, res) => {
  try {
    const categories = await pool.query(
      'SELECT category FROM item GROUP BY category'
    );
    res.json(categories.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

router.get('/product/:id', async (req, res) => {
  const item_id = parseInt(req.params.id);
  const productItem = await pool.query('SELECT * FROM item WHERE id = $1', [
    item_id,
  ]);
  res.json(productItem.rows);
});

router.post('/addFavorites', async (req, res) => {
  // try/catch pour check doublon
  const { userId, itemId } = req.body;
  const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [userId, itemId]);
  console.log(checkFavoriteData.rows);

  if(checkFavoriteData.rows.length > 0){
    return res.status(401).json("Produit déjà ajouté");
  }

  const addToFavorite = await pool.query(
    'INSERT INTO favorite_items (user_id, item_id) VALUES ($1, $2) RETURNING id',
    [userId, itemId]
  );
  res.json(addToFavorite.rows[0]);
});

router.get('/getfavorites', async (req, res) => {
  try {
    const favoriteList = await pool.query(
      'SELECT * FROM item INNER JOIN favorite_items ON item.id = favorite_items.item_id WHERE favorite_items.user_id = $1', []
    );
    res.json(favoriteList.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

module.exports = router;
