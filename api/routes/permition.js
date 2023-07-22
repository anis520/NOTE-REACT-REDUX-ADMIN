import express from "express";
import { verifyToken } from "../middlewares/verfiyToken.js";
import {
  permitonController,
  allpermitonController,
  singlepermitonController,
} from "../controllers/permitonController.js";

/// router
const router = express.Router();

///

router.get("/permition", verifyToken, allpermitonController);
router.post("/permition", verifyToken, permitonController);
router.get("/permition/:id", verifyToken, singlepermitonController);

export default router;
