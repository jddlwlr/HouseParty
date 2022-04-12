const mongoose = require("mongoose");

const { Schema } = mongoose;
const Party = require("./Party");

const ruleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: "Party",
  },
});

const Rule = mongoose.model("Rule", ruleSchema);

module.exports = Rule;
