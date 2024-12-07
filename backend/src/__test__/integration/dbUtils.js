require('dotenv').config();

const { Pool } = require('pg'); //utiliza o cliente PostgresSQL correto

let pool;

const connectToDatabase = async (database) => {
    if (!pool) {
        pool = new Pool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database,
            ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized : false} : false
        });
    }

    return pool;
};

const rootConnect = async () => {
    return connectToDatabase(process.env.DB_NAME);
};

module.exports = {
    rootConnect,
    connectToDatabase,
};




