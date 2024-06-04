const userModel = require('../models/UserModel');

const getAll = async (request, response) => {
    try {
        const users = await userModel.getAll();
        return response.status(200).json(users);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Internal server error" });
    }
};

const getUserById = async (request, response) => {
    try {
        const user = await userModel.getUserById(request.params.id);
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }
        return response.status(200).json(user);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Internal server error" });
    }
};

const createUser = async (request, response) => {
    try {
        const { username, useremail, userpassword, role } = request.body;
        const newUser = await userModel.createUser({ username, useremail, userpassword, role });
        return response.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
};

const loginUser = async (request, response) => {
    try {
        const { useremail, userpassword } = request.body;
        const { user, token } = await userModel.loginUser({ useremail, userpassword });
        return response.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.error(error);
        return response.status(401).json({ message: error.message || "Internal server error" });
    }
};

module.exports = {
    getAll,
    getUserById,
    createUser,
    loginUser
};
