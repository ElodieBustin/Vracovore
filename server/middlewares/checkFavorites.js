const pool = require('../db');

async function checkFavorites (req, res, next){
    const { item_id, user_id } = req.body;
    // async function searchFavorites(item_id, user_id){
    //     const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [user_id, item_id]); 
    // }

    const checkFavoriteData = await pool.query("SELECT * FROM favorite_items WHERE user_id = $1 AND item_id = $2", [user_id, item_id]); 
    console.log('je suis checkFav dans le middl', checkFavoriteData.rows);

    if(checkFavoriteData.rows.length > 0){
        req.test = 'je suis là';
        console.log('je suis req dans middl', req.test);
        console.log("Données présentes");
    }

    next();
}

module.exports = checkFavorites;