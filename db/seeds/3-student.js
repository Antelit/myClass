const { fakerRU: faker } = require('@faker-js/faker');

module.exports = {
    async up(queryInterface) {
        const students = [];

        for (let i = 0; i < 1000; i += 1) {
            students.push({ name: faker.person.fullName() });
        }

        return queryInterface.bulkInsert(
            { tableName: 'students', schema: 'public' },
            students,
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
