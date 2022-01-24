const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY


const authenticate = (req, res, next) => {
    console.log("this function works");
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    const authToken = req.headers.authorization.split(" ")[1];
    console.log(authToken);
    jwt.verify(authToken, JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid auth token" + err);
        } 

        req.user = decoded;
        next();
    }); 
};

module.exports = authenticate;