const db = require('./db');

const User = db.sequelize.define('tb_user', {
    user_id: { type: db.Sequelize.INTEGER, 
    autoIncrement: true, 
    allowNull: false, 
    primaryKey: true },    
    user_email: {
        type: db.Sequelize.STRING
    },
    user_password: {
        type: db.Sequelize.STRING
    },
}, { freezeTableName: true });

const getAll = () => {
    const users = db.execute('SELECT * FROM tb_user');
}


// Post.sync({force: true});

module.exports = User;