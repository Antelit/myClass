module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        await queryInterface.createTable('lessons', {
            idLesson: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            date: { type: DataTypes.DATEONLY },
            title: { type: DataTypes.TEXT },
            status: { type: DataTypes.INTEGER },
        });
    },
};
