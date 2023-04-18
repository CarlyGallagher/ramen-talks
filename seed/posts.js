const { Post } = require('../models');

const postData = [
  {
    title: 'Pit Vipers',
    content: 'Pit Vipers web page is insane!!',
    user_id: 1
    
  },
  {
    title: 'CSS',
    content: 'not a fan',
    user_id: 2
  },
  {
    title: 'Javascript vrs. Java',
    content: 'Javascript is 🔥 and java is 🔥🔥',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;