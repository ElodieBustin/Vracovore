const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authorization(req, res, next){
    try {
        const jwtToken = req.header("token");
        if(!jwtToken){
            return res.status(403).json("Pas autorisé");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        // console.log('le payload dans authorization est ' + payload.user);

        req.user = payload.user;

    } catch (error) {
        console.log(error.message);
        return res.status(403).json("Pas autorisé");
    }
    next();
}

module.exports = authorization;