import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
dotenv.config({})
const app = express();

//middlewares------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

//cors config
const corsOptions = {
  origin:['http://localhost:5173'],//allows req from mentioned localhost
  credentials:true
}
app.use(cors(corsOptions))



const port = process.env.PORT;
app.listen(port, () => {
  try {
    console.log("Server is running!");
    connectDb();
  } catch (e) {
    console.log(e);
    
  }
})