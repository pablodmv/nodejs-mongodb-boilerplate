const mongoose = require("mongoose") ;

const startConnection = async () => {
  const db = await mongoose.connect("mongodb://localhost/test-boilerplate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database is connected");
}
module.exports = startConnection
