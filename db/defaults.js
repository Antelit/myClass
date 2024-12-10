const instance = require('./instance');

module.exports = {
    schema: {
        public: 'public',
    },

    options() {
        return {
            paranoid: false,
            timestamps: false,
            sequelize: instance,
            schema: 'public',
            hooks: { },
        };
    },
};
