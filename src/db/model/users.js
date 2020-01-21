const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = User;