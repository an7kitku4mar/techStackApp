import express from "express";
import { chiefData } from "../controller/publicController.js";
import { carouselTeamData } from "../controller/publicController.js";

const router = express.Router();

router.get("/chief", chiefData);
router.get("/carouselTeam", carouselTeamData);
export default router;