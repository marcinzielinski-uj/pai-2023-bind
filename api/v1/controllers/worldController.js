/*
    User Controller
 */

const worldService = require('../services/worldService');

const getIndex = (req, res) => {
    res.send('world service');
}

const getCities = async(req,res) => {
    // Funkcja SERVICE LAYER
    const allCities =  await worldService.getAllCities();
    res.json(allCities);
}

module.exports = {
    getIndex,
    getCities
}
