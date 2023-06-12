/*
    User Service
 */

const daoUser = require('../dol/daoUser');

const getAllUsers = async () => {
    //const allUsers = await daoUser.userFindAll()
    const allUsers = await daoUser.userFindAll1()
    // Operacje przetworzenia tych danych
    return allUsers
}

module.exports = {
    getAllUsers
}
