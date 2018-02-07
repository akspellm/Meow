const mongoose = require('mongoose');
const Chat = mongoose.model('chat');

module.exports = app => {
  app.get('/api/chat', requireLogin, async (req, res) => {
    const newChat = await Chat.find({ "emotion": "friendly" });
    res.send(newChat);
  })
}
