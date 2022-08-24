import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`mongoDB connected: ${connect.connection.host}`);
};

export default connectDB;