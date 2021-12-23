const { STRING, ENUM } = require("sequelize");
const connection = require("../../database");

const collumns = {
  company: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  category: {
    type: ENUM("toys", "food"),
    allowNull: false,
  },
};

module.exports = connection.define("provider", collumns, {
  freezeTableName: true,
  tableName: "providers",
  timestamps: true,
});
