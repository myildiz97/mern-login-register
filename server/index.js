import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

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
app.use(cors(
  {
    credentials: true,
    origin: ["https://mern-login-register-client.vercel.app"],
    methods: ["POST", "GET"]
  }
));

app.use("/", router);

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
