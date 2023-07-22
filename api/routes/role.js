import express from "express";
import { verifyToken } from "../middlewares/verfiyToken.js";

import { createroleController } from "../controllers/roleController.js";

/// router
const router = express.Router();

///

router.post("/role", verifyToken, createroleController);
// router.post("/permition", verifyToken, permitonController);
// router.get("/permition/:id", verifyToken, singlepermitonController);

export default router;
