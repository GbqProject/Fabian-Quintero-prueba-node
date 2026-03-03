import { Router } from "express";
import { Tienda } from "../models/tienda.model";

const router = Router();

router.get("/", async (req, res) => {
    const tiendas = await Tienda.findAll();
    res.json(tiendas);
});

router.post("/", async (req, res) => {
    const tienda = await Tienda.create(req.body);
    res.status(201).json(tienda);
});

export default router;