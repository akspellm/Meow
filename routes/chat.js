const mongoose = require('mongoose');
const Chat = mongoose.model('chat');
const requireLogin = require("../middlewares/requireLogin");
const catChat = require('../chat.js');

module.exports = app => {
  const randomChat = (catChat) => {
    const random = Math.round(Math.random()* catChat.length);
    const chooseChat = catChat[random];
    return chooseChat;
  }

  app.get('/api/chat', (req, res) => {
    res.send(randomChat(catChat));
  })
}
