import express from 'express';
import bandaCrontroller from '../controller/bandaCrontroller.js';

export const bandaRoutes = express.Router();

bandaRoutes.get("/", bandaCrontroller.getAllBandas);
bandaRoutes.get("/:id", bandaCrontroller.getOneBanda);
bandaRoutes.put("/:id", bandaCrontroller.putBanda);
bandaRoutes.post("/", bandaCrontroller.postBanda);
bandaRoutes.delete("/:id", bandaCrontroller.deletebanda);