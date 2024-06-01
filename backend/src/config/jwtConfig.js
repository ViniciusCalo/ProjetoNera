require('dotenv').config();

module.exports = {
    secret: process.env.SECRET_KEY, // Use uma chave secreta mais segura em produção
    expiresIn: '1h', // Token expira em 1 hora
  };
  