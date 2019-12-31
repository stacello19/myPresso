const Sequelize = require('sequelize');
const db = require('../database');

const Coffee = db.define('coffee', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        defaultValue: '../../shared/image/public/coffee-cup.png'
    },
    price: {
        type: Sequelize.INTEGER
    },
    flavor: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    }
});

module.exports = Coffee;