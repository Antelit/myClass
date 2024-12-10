const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
    ...config.development,
    dialectOptions: {
        application_name: 'APP BACK',
    },
    pool: {
        max: 25,
    },

});

module.exports = sequelize;
