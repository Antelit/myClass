/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('lesson_students', 'visit', {
            type: Sequelize.BOOLEAN,
        });
    },

    async down(queryInterface) {
        await queryInterface.removeColumn('lesson_students', 'visit');
    },
};
