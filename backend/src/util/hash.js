const crypto = require('crypto');

const generateHash = () => {
    const randomBytes = crypto.randomBytes(3); // Gera 3 bytes aleatórios
    const numericHash = parseInt(randomBytes.toString('hex'), 16); // Converte para número
    const shortHashToken = numericHash % 1000000; // Garante que o número tenha no máximo 6 dígitos
    const tokenClass = shortHashToken.toString().padStart(6, '0'); // Preenche com zeros à esquerda se necessário
    return tokenClass;
}

module.exports = { generateHash };

