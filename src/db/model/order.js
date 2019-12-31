const Sequelize = require('sequelize');
const db = require('../database');

const Order = db.define('order', {
    coffeeName: {
        type: Sequelize.TEXT
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    }
});

module.exports = Order;