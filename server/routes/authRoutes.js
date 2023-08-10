import express from "express";
import cors from "cors";
import { test, registerUser, loginUser, getProfile } from "../controllers/authControllers.js";

const router = express.Router();

//middleware
router.use(cors({
  credentials: true,
  origin: "https://mern-login-register-wq6r.vercel.app"
}));

router.get("/", test);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", getProfile);

export default router;