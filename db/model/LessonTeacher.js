const { DataTypes, Model } = require('sequelize');
const defaults = require('../defaults');

const MODEL_NAME = 'LessonTeacher';

module.exports.LessonTeacher = class LessonTeacher extends Model { };

module.exports.initialize = async () => {
    this.LessonTeacher.init(
        {
            idLessonTeacher: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            idLesson: { type: DataTypes.INTEGER, allowNull: false, field: 'lesson_id' },
            idTeacher: { type: DataTypes.INTEGER, allowNull: false, field: 'teacher_id' },
        },
        {
            ...defaults.options(this.LessonTeacher),
            modelName: MODEL_NAME,
            tableName: 'lesson_teachers',
        },
    );
};

module.exports.createReferences = async () => {
};

module.exports.addScopes = () => { };
