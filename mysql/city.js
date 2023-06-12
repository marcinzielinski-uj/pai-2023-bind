const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.CHAR(35),
      allowNull: false,
      defaultValue: ""
    },
    CountryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "",
      references: {
        model: 'country',
        key: 'Code'
      }
    },
    District: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    Population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "CountryCode",
        using: "BTREE",
        fields: [
          { name: "CountryCode" },
        ]
      },
    ]
  });
};
