const Sequelize = require('sequelize');
const secret = require('./env');

const db = new Sequelize(secret.dbname, secret.id, secret.password, {
  host: secret.host,
  port: 5432,
  dialect: 'postgres',
  maxConcurrentQuries: 1024,
  logging: false
})

module.exports = db;