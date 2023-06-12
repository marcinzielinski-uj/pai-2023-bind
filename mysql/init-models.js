var DataTypes = require("sequelize").DataTypes;
var _city = require("./city");
var _country = require("./country");
var _countrylanguage = require("./countrylanguage");
var _users = require("./users");

function initModels(sequelize) {
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var countrylanguage = _countrylanguage(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  city.belongsTo(country, { as: "CountryCode_country", foreignKey: "CountryCode"});
  country.hasMany(city, { as: "cities", foreignKey: "CountryCode"});
  countrylanguage.belongsTo(country, { as: "CountryCode_country", foreignKey: "CountryCode"});
  country.hasMany(countrylanguage, { as: "countrylanguages", foreignKey: "CountryCode"});

  return {
    city,
    country,
    countrylanguage,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
