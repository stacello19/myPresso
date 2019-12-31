const Sequelize = require('sequelize');

//dbname, id, pasword are all from pgAdmin (postgresql)
const db = new Sequelize('coffeePresso', 'stacymc19', 'Sg2158419', {
  host: 'coffeepresso.cfyzcti88uzt.us-east-2.rds.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  maxConcurrentQuries: 1024,
  logging: false
})


module.exports = db;