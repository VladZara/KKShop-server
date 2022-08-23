const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


//load env
dotenv.config({ path: "./config/config.env" });

connectDB();



//route files
const products = require("./routes/products");
const auth = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
//cookie parser
app.use(cookieParser());

//mount routes
app.use("/api/products", products)
app.use("/api/auth", auth);


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