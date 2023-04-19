//Ta datoteka predstavlja "entry point" za definicije tabel v bazi podatkov in vzpostavi povezavo s konfiguracijsko datoteko.

const dbConfig = require("../config/config.js")['development'];

// Ustvarimo objekt Sequelize.
const Sequelize = require("sequelize");
// Ustvarimo povezavo z bazo podatkov preko Sequelize.
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

// Ustvarimo objekt db, ki bo vseboval definicije tabel.
const db = {};

// Nastavimo lastnosti Sequelize in sequelize v objektu db.
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Naložimo model teles (shapes) in ga shranimo v objekt db.
db.shapes = require("./shapes.models.js")(sequelize, Sequelize);

// Izvozimo objekt db za uporabo v drugih datotekah.
module.exports = db;