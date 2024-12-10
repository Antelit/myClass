const { DataTypes, Model } = require('sequelize');
const defaults = require('../defaults');

const MODEL_NAME = 'students';

module.exports.Student = class Student extends Model { };

module.exports.initialize = async () => {
    this.Student.init(
        {
            idStudent: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            name: { type: DataTypes.TEXT },
        },
        {
            ...defaults.options(this.Student),
            modelName: MODEL_NAME,
            tableName: 'students',
        },
    );
};
