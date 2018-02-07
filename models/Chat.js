const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  text: String,
  emotion: String,
});

mongoose.model('chat', chatSchema);
