import express from 'express';
import { iconsRoutes } from './iconsRoute.js';
export const routes = (app) => {
    app.use(express.json());
    app.use("/icons", iconsRoutes)
    app.get("/", (req,res)=> res.send("Main Page"))
}