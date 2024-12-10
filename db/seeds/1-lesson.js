const randomDate = () => {
    const year = Math.floor(Math.random() * (2025 - 2020 + 1) + 2020);
    const month = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    const day = Math.floor(Math.random() * (28 - 1 + 1) + 0);
    return new Date(year, month, day);
};

module.exports = {
    async up(queryInterface) {
        const items = [
            'Русский язык',
            'Литература',
            'История',
            'Обществознание',
            'География',
            'ОБЖ',
            'Природоведение',
            'Окружающий мир',
            'Биология',
            'Физика',
            'Химия',
            'Музыка',
            'Изобразительное искусство',
            'Мировая художественная культура',
            'Искусство',
        ];
        const lessons = [];

        for (let i = 0; i < 100; i += 1) {
            lessons.push({
                date: randomDate(),
                title: items[Math.floor(Math.random() * items.length)],
                status: Math.random() > 0.5 ? 1 : 0,
            });
        }

        return queryInterface.bulkInsert(
            { tableName: 'lessons', schema: 'public' },
            lessons,
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
