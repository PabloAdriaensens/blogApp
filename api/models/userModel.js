const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const User = Connect.define('users', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = User;
