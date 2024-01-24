const { JWT_SECRET } = require('./config')

const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403);
        return;
    }

    try {
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;
        
        next();
    
    } catch (error) {
        res.status(403).json({error: error});
    }
}

module.exports = {authMiddleware};