const mongoose = require('mongoose');
const Chat = mongoose.model('chat');
const requireLogin = require("../middlewares/requireLogin")

module.exports = app => {
  app.get('/api/chat', (req, res) => {
    res.send("Hi!");
  })
}
