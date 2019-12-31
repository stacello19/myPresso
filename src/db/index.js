const db = require('./database');
const sequelize = require('sequelize');
const User = require('./model/users');
const Review = require('./model/review');
const Order = require('./model/order');
const Coffee = require('./model/coffee');

Coffee.hasMany(Review);
Review.belongsTo(Coffee);

User.hasMany(Coffee);
Coffee.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize.sync({force: true});

module.exports = {
    db,
    User,
    Review,
    Order,
    Coffee
}