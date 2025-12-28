const {DataTypes} = require("sequelize");
const {sequelize} = require("../database/Database.js");

const Contact = sequelize.define(
    "Contact",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: false
        },
        message:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "contacts",
        timestamps: true
    }
)
module.exports = Contact