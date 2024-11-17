import iconsController from "../controller/iconsController.js";
import express from 'express';

export const iconsRoutes = express.Router();

iconsRoutes.get("/", iconsController.getAllIcons);
iconsRoutes.get("/:id", iconsController.getOneIcon);
iconsRoutes.post("/", iconsController.postIcon);
iconsRoutes.put("/:id", iconsController.putIcon);
iconsRoutes.delete("/:id", iconsController.deleteIcon);
