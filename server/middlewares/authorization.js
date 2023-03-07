const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authorization(req, res, next){
    try {
        const jwtToken = req.heander("token");
        if(!jwtToken){
            return res.status(403).json("Pas autorisé");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;

    } catch (error) {
        console.log(error.message);
        return res.status(403).json("Pas autorisé");
    }
}

module.exports = authorization;