const { DataTypes, Model } = require('sequelize');
const defaults = require('../defaults');

const { LessonTeacher } = require('./LessonTeacher');
const { LessonStudents } = require('./LessonStudents');
const { Teacher } = require('./Teacher');
const { Student } = require('./Student');

const MODEL_NAME = 'Lessons';

module.exports.Lessons = class Lessons extends Model { };

module.exports.initialize = async () => {
    this.Lessons.init(
        {
            idLesson: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            date: { type: DataTypes.DATEONLY },
            title: { type: DataTypes.TEXT },
            status: { type: DataTypes.INTEGER },
        },
        {
            ...defaults.options(this.Lessons),
            modelName: MODEL_NAME,
            tableName: 'lessons',
        },
    );
};

module.exports.createReferences = async () => {
    this.Lessons.belongsToMany(
        Teacher,
        {
            through: LessonTeacher,
            foreignKey: 'lesson_id',
            otherKey: 'teacher_id',
            as: 'teachers',
        },
    );

    this.Lessons.belongsToMany(
        Student,
        {
            through: LessonStudents,
            foreignKey: 'lesson_id',
            otherKey: 'student_id',
            as: 'students',
        },
    );
};

module.exports.addScopes = () => {
};
