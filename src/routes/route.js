import express from 'express';
import { iconsRoutes } from './iconsRoute.js';
import { bandaRoutes } from './bandaRoute.js';


export const routes = (app) => {
    app.use(express.json());
    app.use("/icons", iconsRoutes)
    app.use("/bandas", bandaRoutes)
    app.get("/", (req,res)=> res.send("Main Page"))
}