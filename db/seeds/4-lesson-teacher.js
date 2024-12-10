
module.exports = {
    async up(queryInterface) {
        const LessonRows = await queryInterface.sequelize.query(
            'SELECT * FROM lessons',
            { type: queryInterface.sequelize.QueryTypes.SELECT },
        );

        const TeacherRows = await queryInterface.sequelize.query(
            'SELECT * FROM teachers',
            { type: queryInterface.sequelize.QueryTypes.SELECT },
        );

        const lessonTeachers = [];

        for (let i = 0; i < 1000; i += 1) {
            const { id: lesson_id } = LessonRows[Math.floor(Math.random() * LessonRows.length)];
            const { id: teacher_id } = TeacherRows[Math.floor(Math.random() * TeacherRows.length)];

            lessonTeachers.push({ lesson_id, teacher_id });
        }

        return queryInterface.bulkInsert(
            { tableName: 'lesson_teachers', schema: 'public' },
            lessonTeachers,
        );
    },

    async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    },
};
