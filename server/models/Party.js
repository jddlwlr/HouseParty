const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./User");

const partySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  creator: {
    type: Schema.Types.ObjectId,
  },
  //   rules: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Rule"
  //   },
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
