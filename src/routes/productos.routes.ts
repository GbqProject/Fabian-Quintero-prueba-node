import { Router } from "express";
import { Producto, ProductoStock, Tienda } from "../models";
import { ProductoStockResponse } from "../types/responses/products/productos-stock.interface";
const router = Router();

router.get("/", async (req, res) => {
    const stock = await Producto.findAll({
        attributes: ["id", "nombre", "presentacion"],
        include: [
            {
                model: ProductoStock,
                attributes: ["id", "cantidad", "id_producto", "id_tienda"],
                include: [
                    {
                        model: Tienda,
                        attributes: ["id", "nombre"]
                    }
                ],

            }
        ],
    });
    const formattedStock: ProductoStockResponse[] = stock.map(producto => {
        const plain_product = producto.get({ plain: true });
        console.log('stock---->', plain_product);
        return {
            idProducto: plain_product.id,
            nombre: plain_product.nombre,
            presentacion: plain_product.presentacion,
            tiendas: plain_product.ProductoStocks.map((stock: any) => ({
                idTienda: stock.id_tienda,
                nombre: stock.Tienda.nombre,
                stock: Number(stock.cantidad)
            }))
        };
    });

    res.send(formattedStock);
});

export default router;