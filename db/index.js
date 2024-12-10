/* eslint-disable global-require */
const models = {
    LessonStudents: require('./model/LessonStudents'),
    LessonTeacher: require('./model/LessonTeacher'),

    Lessons: require('./model/Lesson'),
    Students: require('./model/Student'),
    Teachers: require('./model/Teacher'),

};

module.exports.init = async () => {
    Object.keys(models).forEach((model) => {
        models[model].initialize();
    });

    Object.keys(models).forEach((model) => {
        models[model].createReferences?.();
    });

    Object.keys(models).forEach((model) => {
        models[model].addScopes?.();
    });

    Object.keys(models).forEach((model) => {
        models[model].addHooks?.();
    });
};
