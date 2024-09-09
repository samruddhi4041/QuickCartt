/*const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.URI);
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;*/
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

