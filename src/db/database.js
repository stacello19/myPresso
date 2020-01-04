const Sequelize = require('sequelize');
const secret = require('./secret')l
//dbname, id, pasword are all from pgAdmin (postgresql)
const db = new Sequelize(secret.dbname, secret.id, secret.password, {
  host: secret.host,
  port: 5432,
  dialect: 'postgres',
  maxConcurrentQuries: 1024,
  logging: false
})

// exports.handler = async (event, context, callback) => {

//   context.callbackWaitsForEmptyEventLoop = false;
//   db.authenticate()
//   .then(() => {
//     callback(null, 'Connection has been established successfully.');
//   })
//   .catch(err => {
//     callback(err);
//   });
// }

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }

module.exports = db;