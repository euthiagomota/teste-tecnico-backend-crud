require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'acesso negado!' });
    }
    const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];


    if (!token) {
        return res.status(401).json({ message: 'acesso negado!' });
    }

    try {
        const verifed = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifed;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'token invalido!' });
    }
};

module.exports = checkToken;