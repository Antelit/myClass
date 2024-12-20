module.exports = {
    async up(queryInterface) {
        const LessonRows = await queryInterface.sequelize.query(
            'SELECT * FROM lessons',
            { type: queryInterface.sequelize.QueryTypes.SELECT },
        );

        const StudentRows = await queryInterface.sequelize.query(
            'SELECT * FROM students',
            { type: queryInterface.sequelize.QueryTypes.SELECT },
        );

        const lessonStudents = [];

        for (let i = 0; i < 10000; i += 1) {
            const { id: lesson_id } = LessonRows[Math.floor(Math.random() * LessonRows.length)];
            const { id: student_id } = StudentRows[Math.floor(Math.random() * StudentRows.length)];

            const checkEx = lessonStudents
                .find((el) => el.lesson_id === lesson_id && el.student_id === student_id);

            if (!checkEx) {
                lessonStudents.push({
                    lesson_id,
                    student_id,
                    visit: Math.random() > 0.5,
                });
            }
        }
        console.log({ lessonStudents: lessonStudents.length });

        return queryInterface.bulkInsert(
            { tableName: 'lesson_students', schema: 'public' },
            lessonStudents,
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
