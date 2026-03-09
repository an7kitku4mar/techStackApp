import express from "express";
import { menuMast } from "../controller/personalController.js";

const router = express.Router();

router.get("/menu", menuMast);

export default router;