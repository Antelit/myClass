const { fakerRU: faker } = require('@faker-js/faker');

module.exports = {
    async up(queryInterface) {
        const teachers = [];

        for (let i = 0; i < 100; i += 1) {
            teachers.push({ name: faker.person.fullName() });
        }

        return queryInterface.bulkInsert(
            { tableName: 'teachers', schema: 'public' },
            teachers,
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
