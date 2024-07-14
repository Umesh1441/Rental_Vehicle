const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://nodejsboy:nodejsboy@cluster0.1vzsvxk.mongodb.net/?retryWrites=true", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
