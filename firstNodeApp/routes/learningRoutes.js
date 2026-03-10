import express from "express";
import fileOperations from "../controller/learningController.js";

const router = express.Router();

router.get("/learning", fileOperations);
export default router;