const pool = require('../db');

async function checkFavorites (req, res, next){
    const { item_id, user_id } = req.body;
    const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [user_id, item_id]); 

    if(checkFavoriteData.rows.length > 0){
        req.test = 'je suis là';
    }

    next();
}

module.exports = checkFavorites;