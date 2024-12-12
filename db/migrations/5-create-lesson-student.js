module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        await queryInterface.createTable('lesson_students', {
            // idLessonStudents: {
            //     type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            // },
            idLesson: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'lesson_id',
                references: {
                    model: 'lessons', key: 'id',
                },
            },
            idStudent: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'student_id',
                references: {
                    model: 'students', key: 'id',
                },
            },
        });
    },
};
