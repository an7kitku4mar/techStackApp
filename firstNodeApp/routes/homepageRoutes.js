import express from "express";
import { chiefData, loginForm } from "../controller/homeController.js";

const router = express.Router();

router.get("/chief", chiefData);
router.post("/login", loginForm);
export default router;