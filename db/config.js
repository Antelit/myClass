require('dotenv').config();

const {
    DB_HOST_TEST, DB_PORT, DB_NAME, DB_USER, DB_PASS,
} = process.env;

module.exports = {
    development: {
        dialect: 'postgres',
        database: DB_NAME,
        username: DB_USER,
        password: DB_PASS,
        host: DB_HOST_TEST,
        port: DB_PORT,
        seederStorage: 'sequelize',
        migrationStorageTableName: 'sequelize_meta',
        seederStorageTableName: 'sequelize_data',
    },
};
