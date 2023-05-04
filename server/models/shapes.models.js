// V tej datoteki je definirana oblika teles (shape) in povezava s tabelo shapes v bazi podatkov.

const { Sequelize } = require('sequelize');
const db = require('../config/config.js');

module.exports = (sequelize, Sequelize) => {
const Shape = sequelize.define("shapes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    set_name: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    a: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    b: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    radius: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
},
{
    timestamps: false // Onemogočimo timestamps zaradi createdAt in updatedAt
  },
    {
        tableName: 'shapes'  
    });

    return Shape;
};