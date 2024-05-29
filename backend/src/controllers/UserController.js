const express = require('express');
//const app = express();
const router = express.Router();

const User = require('../models/UserModel');

router.get('/', async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).json({ message: users });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});


router.post('/login', async (req, res) => {

    const { user_email, user_password } = req.body;
    try {
        const login = await User.findOne({
            where: {
                user_email: user_email,
                user_password: user_password
            }
        }).then(function (result) {
            if (result) {
                req.session = result
                console.log(req.session.email);
                res.status(200).json({ message: req.session.email });
            } else {
                res.status(401).json({ message: 'Verifique email ou senha de usuario' });
            }
        });
    }

    catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login do usuário' })
    }


});


router.post('/cadastrar', async (req, res) => {

    const { user_email, user_password } = req.body;
    try {
        const login = await User.findOne({
            where: {
                user_email: user_email
            }
        }).then(function (result) {
            if (result) {
                res.status(401).json({ message: 'Este usuario ja existe' });
            } else {
                const newUser = User.create({ user_email, user_password })
                res.status(200).json({ message: 'Cadastrado com sucesso' });
            }

        });

    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' })
    }

    module.exports = router;

});
