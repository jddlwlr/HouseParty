const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jedd:blacklab@cluster0.foukc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
