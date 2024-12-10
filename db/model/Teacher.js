const { DataTypes, Model } = require('sequelize');
const defaults = require('../defaults');

const MODEL_NAME = 'Lessons';

module.exports.Teacher = class Teacher extends Model { };

module.exports.initialize = async () => {
    this.Teacher.init(
        {
            idTeacher: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            name: { type: DataTypes.TEXT },
        },
        {
            ...defaults.options(this.Teacher),
            modelName: MODEL_NAME,
            tableName: 'teachers',
        },
    );
};
