const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./User");
const Rule = require("./Rule");

const partySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  rules: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rule",
    },
  ],
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
