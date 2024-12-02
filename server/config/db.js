import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({})

//function to connect to database
const connectDb = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Database connected!"
    );
    
  } catch (e) {
    console.log(e);
    
  }
}

export default connectDb;