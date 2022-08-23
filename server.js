const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");


//load env
dotenv.config({ path: "./config/config.env" });

connectDB();

//route files
const products = require("./routes/products");

const app = express();

//Body parser
app.use(express.json());

//mount routes
app.use("/api/products", products);


app.use(errorHandler);

const PORT = process.env.PORT || 3002;

const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//handle/unhandled rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server & exit process
  server.close(() => process.exit(1));
});