const dotenv = require("dotenv");
const { connect } = require("mongoose");
dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URL;

connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Error in Connecting Database");
  });

// process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD
// "mongodb://127.0.0.1:27017/frontEndProject"
