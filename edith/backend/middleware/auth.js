const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Verification
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const jwtSecret = authConfig.jwt.secret;
        const decodedToken = jwt.verify(token, jwtSecret);

        req.user = decodedToken.user;
        next();
    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}