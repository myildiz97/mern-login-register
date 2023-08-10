import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import router from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));