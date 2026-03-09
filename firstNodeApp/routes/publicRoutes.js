import express from "express";
import { chiefData } from "../controller/publicController.js";

const router = express.Router();

router.get("/chief", chiefData);
export default router;