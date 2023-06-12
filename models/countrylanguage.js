module.exports = (sequelize, DataTypes) => {
  const CountryLanugage = sequelize.define('countrylanguage', {
    CountryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      references: {
        model: 'country',
        key: 'Code'
      }
    },
    Language: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IsOfficial: {
      type: DataTypes.ENUM('T','F'),
      allowNull: false,
      defaultValue: "F"
    },
    Percentage: {
      type: DataTypes.FLOAT(4,1),
      allowNull: false,
      defaultValue: 0.0
    }
  }, {
    sequelize,
    tableName: 'countrylanguage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CountryCode" },
          { name: "Language" },
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
  return CountryLanugage;
};
