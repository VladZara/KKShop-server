import path from "path";
import {fileURLToPath} from 'url';
import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/error.js";



//load env
dotenv.config({ path: "./config/config.env" });

connectDB();

//route files
import products from "./routes/products.js";
import auth from "./routes/auth.js";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());
//cookie parser
app.use(cookieParser());

app.use(fileUpload());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//set public
app.use(express.static(path.join(__dirname, 'public')));

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