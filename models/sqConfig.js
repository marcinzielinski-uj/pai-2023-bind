const dbConfig = require("./config/db.js");

const Sequelize = require("sequelize");

console.log(dbConfig);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modele danych
db.user = require("./user.js")(sequelize, Sequelize);
db.city = require("./city")(sequelize,Sequelize);
db.country = require("./country")(sequelize,Sequelize);
db.countrylanguage = require("./countrylanguage")(sequelize,Sequelize);

// Powiazania bazodanowe
db.city.belongsTo(db.country, {
    as: "CountryCode_country", foreignKey: "CountryCode"
    });
db.country.hasMany(db.city, {
    as: "cities", foreignKey: "CountryCode"
    });
db.countrylanguage.belongsTo(db.country, {
    as: "CountryCode_country", foreignKey: "CountryCode"
    });
db.country.hasMany(db.countrylanguage, {
    as: "countrylanguages", foreignKey: "CountryCode"
    });

db.sequelize.sync({force: false})
    // false - nienadpisuje struktury bazy i danych
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    })

module.exports = db;