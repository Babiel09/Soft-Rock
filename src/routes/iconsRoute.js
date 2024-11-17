import iconsController from "../controller/iconsController.js";
import express from 'express';

const routes = express.Router();

routes.get("/icons", iconsController.getAllIcons);
