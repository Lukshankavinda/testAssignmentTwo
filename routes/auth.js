const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header('jwtToken');
        if(!token) return res.status(403).send('Access denied. ');

        const decod = jwt.verify(token, 'SECRETKEY');
        req.user = decod;
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}