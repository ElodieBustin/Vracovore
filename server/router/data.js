const express = require('express');
const pool = require('../db');
const router = express.Router();
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
  const addToFavorite = await pool.query(
    'INSERT INTO favorite_items (user_id, item_id) VALUES ($1, $2) RETURNING id',
    [user_id, item_id]
  );
  res.json(addToFavorite.rows[0]);
});

router.post('/checkFavorites', cors(), async (req, res) => {
  const { item_id, user_id } = req.body;
  const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [user_id, item_id]);

  if(checkFavoriteData.rows.length > 0){
    return res.json(true);
  } else {
    return res.json(false);
  }
});

router.delete('/deleteFavorite', cors(), async (req, res) => {
  const { item_id, user_id } = req.body;

  try {
    const deleteFavData = await pool.query("DELETE FROM favorite_items WHERE item_id = $1 AND user_id = $2", [item_id, user_id]);
    console.log(deleteFavData);
    console.log('Favori supprimé');
    res.send('');
  } catch (error) {
    console.log('L\'erreur de delete est : ', error.message)
  }
})

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

router.get('/listRecipes', async (req, res) => {
  try {
    const items = await pool.query('SELECT * FROM recipes ORDER BY title');
    res.json(items.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server error');
  }
});

router.get('/recipe/:id', async (req, res) =>{
  const recipe_id = parseInt(req.params.id);
  const recipeDetail = await pool.query('SELECT * FROM recipes WHERE id = $1', [
    recipe_id,
  ]);
  res.json(recipeDetail.rows);
});

router.get('/recipe/:id/steps', async (req, res) => {
  try {
    const recipe_id = parseInt(req.params.id);
    const recipeSteps = await pool.query('SELECT * FROM "steps" INNER JOIN recipe_steps ON steps.id = recipe_steps.step_id WHERE recipe_steps.recipe_id = $1',[recipe_id]);
    res.json(recipeSteps.rows)
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/recipe/:id/ingredient', async (req, res) => {
  try {
    const recipe_id = parseInt(req.params.id);
    const recipeIngredients = await pool.query('SELECT * FROM "items" INNER JOIN ingredients ON items.id = ingredients.item_id WHERE ingredients.recette_id = $1',[recipe_id]);
    res.json(recipeIngredients.rows);
  } catch (error) {
    console.log(error.message);
  }
});



module.exports = router;
