const { Sequelize } = require('sequelize');
const path = require('path');
const config = require('./config');

const { SQL_LOGGING } = process.env;

let cnt_query = 0;

const sqlLog = (msg, time) => {
    cnt_query += 1;

    if (cnt_query % 10000 === 0) console.log(`--- Кол-во SQL запросов: ${cnt_query}`);

    if (SQL_LOGGING === 'false') return false;

    const { stack } = new Error();
    const lines = stack
        .split('\n')
        .filter((line) => !line.match(/node_modules|internal|instance|Error/));
    const rootPath = path.resolve(__dirname, '..');
    const file = (lines.pop() || '')
        .replace(new RegExp(`.*${rootPath}\\/`), '')
        .replace(/.js.*/, '');
    const location = file.length ? `[${file}] ` : '';
    const executionTime = time.toString();

    // eslint-disable-next-line no-console
    console.log(`${executionTime} ${location}${msg}`);
    return true;
};

const sequelize = new Sequelize({
    ...config.development,
    dialectOptions: {
        application_name: 'APP BACK',
    },
    pool: {
        max: 25,
    },
    benchmark: parseInt(SQL_LOGGING, 10) === 1,
    logging: sqlLog,
});

module.exports = sequelize;
