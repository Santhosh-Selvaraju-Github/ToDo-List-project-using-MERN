const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete:{
    type: Boolean,
    default:false

  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TodoList", TodoSchema);
