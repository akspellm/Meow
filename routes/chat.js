const mongoose = require('mongoose');
const Chat = mongoose.model('chat');
const requireLogin = require("../middlewares/requireLogin");
const catChat = require('../chat.js');

const UsersChat = mongoose.model('users-chat');

module.exports = app => {
    const randomChat = (catChat) => {
    const random = Math.round(Math.random()* catChat.length);
    const chooseChat = catChat[random];
    return chooseChat;
  }

  app.get('/api/chat', (req, res) => {
    const thisChat = randomChat(catChat);

    const date = new Date();

    const user = new UsersChat({
      userId: req.user.id,
      chat: thisChat,
      date: date.toLocaleDateString()
    }).save();


    res.send(randomChat(catChat));
  });

  app.get('/profile/api/chatList', requireLogin, async (req, res) => {
    const usersChat = await UsersChat.find({ userId: req.user.id })
    .sort({date: -1})

    res.send(usersChat);
  });
}
