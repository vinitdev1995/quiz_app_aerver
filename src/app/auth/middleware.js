const jwt = require('jsonwebtoken');
const moment = require("moment");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.decode(token, {complete: true});
        const isValidRole = decoded.payload.Roles.includes("ROLE_ADMIN");
        const expireTime = decoded.payload.exp;
        const currentTime = moment().unix();
        if ((expireTime > currentTime) && isValidRole) {
            res.status(200);
            next();
        } else {
            res.status(401).send({error: 'Token expired'})
        }
    } catch (e){
        res.status(400).send({error: 'Invalid token'});
    }
};