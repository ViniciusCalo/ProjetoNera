const crypto = require('crypto');

const generateHash = (timestamp) => {
    const hash = crypto.createHash('sha256').update(timestamp.toString()).digest('hex');
    const numericHash = parseInt(hash.toString(), 16);
    const shortHashToken = parseInt(numericHash.toString().slice(0, 6));
    return shortHashToken;
}

module.exports = { generateHash };