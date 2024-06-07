const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKENUTIL_SECRETKEY;

const generateToken = (classroomid) => {
    const token = jwt.sign({ classroomid }, secret, { expiresIn: '20min'})
    return token;
};

const validateToken = (token) => {
    try{
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch(error){
        console.error('Error validating token: ', error);
    };
};

module.exports = {
    generateToken,
    validateToken,
};