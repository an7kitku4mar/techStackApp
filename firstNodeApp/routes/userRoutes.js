import express from "express";
import { registerUser } from "../controller/userController.js";
import { loginForm } from "../controller/loginController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginForm);
export default router;

