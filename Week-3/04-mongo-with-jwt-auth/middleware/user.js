const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const AuthHeaders = req.headers["authorization"];
        const token = AuthHeaders.split(" ")[1];
        const isBearer = AuthHeaders.split(" ")[0] === "Bearer";
        if (token && isBearer) {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded.username;
          next();
        }
    } catch (error) {
        res.json(error);
    }
}

module.exports = userMiddleware;