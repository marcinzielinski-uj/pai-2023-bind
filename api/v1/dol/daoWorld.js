const db = require("../../../models/sqConfig");
const Op = db.Sequelize.Op;

// Pobieramy modele z ktorymi chcemy pracowac
const City = db.city;
const Country = db.country;
const CountryLanuage = db.countrylanguage;


const FindAllCitiesX = () => {
    const name = 'An';
    let condition = name ? { name: { [Op.like]: `${name}%` } } : null;
    //let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    return User.findAll({ where: condition })
    //return User.findAll()
        .then(data => {
            //console.log(data);
            return data ;
        })
        .catch(err => {
            return err.message
        });
};

const FindAllCities = async () => {
    let data = [];
    try {
        data = await City.findAll({attributes: ['ID','Name','CountryCode']});
    }
    catch(e) {
        console.log(e)
    }
    return data
};

module.exports = {
    FindAllCities
}

