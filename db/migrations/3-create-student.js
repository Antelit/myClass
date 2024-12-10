module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        await queryInterface.createTable('students', {
            idStudent: {
                type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id',
            },
            name: { type: DataTypes.TEXT },
        });
    },
};
