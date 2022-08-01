const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    },
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);
module.exports = feedbackModel;
