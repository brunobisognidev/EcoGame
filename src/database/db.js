const Sequelize = require('sequelize');
const db = {}
const sequelize = new Sequelize('greenfood','bruno', 'Amor131313@'{
   host:"localhost",
   dialect:"mysql",

   pool:{
      max:5,
      min:0,
      acquire: 30000,
      idle:10000
   }
})