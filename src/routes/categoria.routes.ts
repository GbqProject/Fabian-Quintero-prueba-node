import { Router } from "express";
import { Categoria, Producto, ProductoCategoria } from "../models";
import { CategoriaResponse } from "../types/responses/categories/categorias.response";
import { col, fn } from "sequelize";

const router = Router();

router.get("/", async (req, res) => {
    const result = await Categoria.findAll({
        attributes: [
            "id",
            "nombre",
            [fn("COUNT", col("ProductoCategoria.id")), "cantidad_productos"]
        ],
        include: [
            {
                model: ProductoCategoria,
                attributes: [],
                required: true
            }
        ],
        group: ["Categoria.id"],
        order: [[fn("COUNT", col("ProductoCategoria.id")), "DESC"]]
    });

    const categorias: CategoriaResponse[]= result.map(categoria => {
        const plain_categoria = categoria.get({ plain: true });
        return {
            idCategoria: plain_categoria.id,
            nombre: plain_categoria.nombre,
            cantProductos: plain_categoria.cantidad_productos
        };
    });

    return res.send(categorias);
});

export default router;