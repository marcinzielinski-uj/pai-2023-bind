/*
    User Controller
 */

const userService = require('../services/userService');

const getIndex = (req, res) => {
    res.send('user service');
}

const getUsers = async(req,res) => {
    // Funkcja SERVICE LAYER
    const allUsers =  await userService.getAllUsers();
    res.json(allUsers);
}

module.exports = {
    getIndex,
    getUsers
}
