const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/javascript");
    console.log("connect successfully");
  } catch (error) {
    console.log("fail connect successfully");
  }
}
module.exports = { connect };
