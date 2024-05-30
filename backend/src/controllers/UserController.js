const userModel = require('../models/UserModel');

const getAll = async (request, response) => {
    try {
        const users = await userModel.getAll();
        return response.status(200).json(users);
    } catch (error) {
        console.error(error); // Adicione isso para ajudar na depuração
        return response.status(500).json({ message: "Internal server error" });
    }
};

const createUser = async (request, response) => {
    try {
        const createUser = await userModel.createUser(request.body);
        return response.status(200).json({message: "User created successfully"});
    } catch (error) {
        console.error(error); // Adicione isso para ajudar na depuração
        return response.status(500).json({ message: "Internal server error" });
    }
};
module.exports = {
    getAll,
    createUser
};
