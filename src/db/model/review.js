const Sequelize = require('sequelize');
const db = require('../database');

const Review = db.define('review', {
    name: {
        type: Sequelize.TEXT
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    review: {
        type: Sequelize.TEXT
    }
});

module.exports = Review;