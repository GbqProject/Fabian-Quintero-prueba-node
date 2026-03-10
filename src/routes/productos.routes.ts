import { Router } from "express";
import { PedidoProducto, Producto, ProductoStock, Tienda } from "../models";
import { ProductoStockResponse } from "../types/responses/products/productos-stock.response";
import { ProductoMasVendidosResponse } from "../types/responses/products/mas-vendidos.response";
import { col, fn } from "sequelize";
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

router.get("/mas-vendidos", async (req, res) => {
    const result = await PedidoProducto.findAll({
        attributes: [
            "id_producto",
            [fn("SUM", col("cantidad")), "unidades_vendidas"]
        ],
        include: [
            {
                model: Producto,
                attributes: ["nombre", "presentacion"]
            },
        ],
        group: ["id_producto"],
        limit: 10,
    });
    const masVendidos: ProductoMasVendidosResponse[] = result.map(item => {
        const plain_item = item.get({ plain: true });
        return {
            idProducto: plain_item.id_producto, 
            unidadesVendidas: Number(plain_item.unidades_vendidas), 
            nombre: plain_item.Producto.nombre || "", 
            presentacion: plain_item.Producto.presentacion || ""
        };
    });

    res.send(masVendidos);
});

export default router;