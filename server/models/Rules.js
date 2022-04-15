const mongoose = require("mongoose");

const { Schema } = mongoose;
const Party = require("./Party");

const ruleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Rule = mongoose.model("Rule", ruleSchema);

module.exports = Rule;