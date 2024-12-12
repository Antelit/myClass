const { DataTypes, Model } = require('sequelize');
const defaults = require('../defaults');

const MODEL_NAME = 'LessonStudents';

module.exports.LessonStudents = class LessonStudents extends Model { };

module.exports.initialize = async () => {
    this.LessonStudents.init(
        {
            /*
            idLessonStudents: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            */
            idLesson: { type: DataTypes.INTEGER, allowNull: false, field: 'lesson_id' },
            idStudents: { type: DataTypes.INTEGER, allowNull: false, field: 'student_id' },
            visit: { type: DataTypes.BOOLEAN },
        },
        {
            ...defaults.options(this.LessonStudents),
            modelName: MODEL_NAME,
            tableName: 'lesson_students',
        },
    );
};
