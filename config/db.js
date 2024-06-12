import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("DB connection error ", error.message);
    process.exit(1);
  }
};

export default connectDB;
