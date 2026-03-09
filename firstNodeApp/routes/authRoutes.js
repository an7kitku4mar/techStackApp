import express from "express";
import { loginForm } from "../controller/loginController.js";

const router = express.Router();

router.post("/login", loginForm);

export default router;