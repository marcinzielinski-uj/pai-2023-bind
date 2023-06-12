/*
    User Service
 */

const daoWorld = require('../dol/daoWorld');

const getAllCities = async () => {
    const allCities = await daoWorld.FindAllCities();
    return allCities
}

module.exports = {
   getAllCities
}
