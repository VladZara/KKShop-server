import express from "express";
import dotenv from "dotenv";
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

const app = express();

app.use(bodyParser.json());
//cookie parser
app.use(cookieParser());

//mount routes
app.use("/api/products", products)
app.use("/api/auth", auth);


app.use(errorHandler);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send({ express: 'EXPRESS CONNECT TO REACT' }); 
});

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

