import { sequelize } from "../config/database";

import { Tienda } from "./tienda.model";
import { Producto } from "./produto.model";
import { Categoria } from "./categoria.model";
import { ProductoCategoria } from "./producto-categoria.model";
import { ProductoStock } from "./producto-stock.model";
import { Promocion } from "./promocion.model";
import { TiendaPromocion } from "./tienda-promocion.model";
import { Pedido } from "./pedido.model";
import { PedidoProducto } from "./pedido-producto.model";

/* ===================== RELATIONS ===================== */

// Tienda - ProductosStock
Tienda.hasMany(ProductoStock, { foreignKey: "id_tienda" });
ProductoStock.belongsTo(Tienda, { foreignKey: "id_tienda" });

// Producto - ProductosStock
Producto.hasMany(ProductoStock, { foreignKey: "id_producto" });
ProductoStock.belongsTo(Producto, { foreignKey: "id_producto" });

// Producto - Categoria (Many to Many)
Producto.belongsToMany(Categoria, {
    through: ProductoCategoria,
    foreignKey: "id_producto"
});

Categoria.belongsToMany(Producto, {
    through: ProductoCategoria,
    foreignKey: "id_categoria"
});

// Direct relations
ProductoCategoria.belongsTo(Producto, { foreignKey: "id_producto" });
Producto.hasMany(ProductoCategoria, { foreignKey: "id_producto" });

ProductoCategoria.belongsTo(Categoria, { foreignKey: "id_categoria" });
Categoria.hasMany(ProductoCategoria, { foreignKey: "id_categoria" });

// Tienda - Pedido
Tienda.hasMany(Pedido, { foreignKey: "id_tienda" });
Pedido.belongsTo(Tienda, { foreignKey: "id_tienda" });

// Pedido - PedidoProducto
Pedido.hasMany(PedidoProducto, { foreignKey: "id_pedido" });
PedidoProducto.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Producto - PedidoProducto
Producto.hasMany(PedidoProducto, { foreignKey: "id_producto" });
PedidoProducto.belongsTo(Producto, { foreignKey: "id_producto" });

// Promocion - PedidoProducto
Promocion.hasMany(PedidoProducto, { foreignKey: "id_promocion" });
PedidoProducto.belongsTo(Promocion, { foreignKey: "id_promocion" });

// Tienda - Promocion (Many to Many with extra fields)
Tienda.belongsToMany(Promocion, {
    through: TiendaPromocion,
    foreignKey: "id_tienda"
});

Promocion.belongsToMany(Tienda, {
    through: TiendaPromocion,
    foreignKey: "id_promocion"
});


// TiendaPromocion -> Tienda
TiendaPromocion.belongsTo(Tienda, {
    foreignKey: "id_tienda"
});

Tienda.hasMany(TiendaPromocion, {
    foreignKey: "id_tienda"
});


// TiendaPromocion -> Promocion
TiendaPromocion.belongsTo(Promocion, {
    foreignKey: "id_promocion"
});

Promocion.hasMany(TiendaPromocion, {
    foreignKey: "id_promocion"
});

export {
    sequelize,
    Tienda,
    Producto,
    Categoria,
    ProductoCategoria,
    ProductoStock,
    Promocion,
    TiendaPromocion,
    Pedido,
    PedidoProducto
};