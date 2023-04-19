// V tej datoteki se nahaja konfiguracija za povezavo z bazo podatkov.

const { Sequelize } = require('sequelize');

module.exports = {
    development: {
      username: 'root',
      password: 'root',
      database: 'praksadb',
      host: 'localhost',
      dialect: 'mysql',
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'mysql',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
  };