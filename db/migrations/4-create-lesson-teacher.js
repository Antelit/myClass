module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        await queryInterface.createTable('lesson_teachers', {
            idLessonStudents: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            idLesson: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'lesson_id',
                references: {
                    model: 'lessons', key: 'id',
                },
            },
            idTeacher: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'teacher_id',
                references: {
                    model: 'teachers', key: 'id',
                },
            },
        });
    },
};
