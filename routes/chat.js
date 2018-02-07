const mongoose = require('mongoose');
const Chat = mongoose.model('chat');

module.exports = app => {
  app.get('/api/chat', async (req, res) => {
    const chat = await Chat.find({ "emotion": "friendly"});
    console.log("hi" + chat)
    res.send("hi" + chat);
  })
}
