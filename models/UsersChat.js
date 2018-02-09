const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersChat = new Schema({
  userId: String,
  chat: String,
  date: String
});

mongoose.model('users-chat', usersChat);
