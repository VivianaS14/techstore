import { Router } from "express";
import { authMiddleware } from "../authMiddleware.js";
import {
  createDevice,
  deleteDevice,
  getDevice,
  getDevices,
  updateDevice,
} from "../controllers/devices.controller.js";

const router = Router();

router.get("/devices", getDevices);
router.get("/device/:id", getDevice);

router.post("/devices", authMiddleware, createDevice);

router.put("/device/:id", authMiddleware, updateDevice);

router.delete("/device/:id", authMiddleware, deleteDevice);

export default router;
