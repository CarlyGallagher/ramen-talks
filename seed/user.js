const { User } = require('../models');

const userData = [
  {
    username: 'CarlyG',
    password: 'test1'
    
  },
  {
    username: 'jgally',
    password: 'test2'
  },
  {
    username: 'cj3',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;