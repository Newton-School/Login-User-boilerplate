const { string } = require("joi");
const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  creator_id: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Discussion", discussionSchema);

