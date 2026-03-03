import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class PedidoProducto extends Model { }

PedidoProducto.init(
    {
        id: { type: DataTypes.MEDIUMINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        cantidad: DataTypes.DECIMAL(9, 3),
        valor_unitario: DataTypes.DECIMAL(11, 3).UNSIGNED,
        valor_unitario_promocion: DataTypes.DECIMAL(11, 3).UNSIGNED,
        total_teorico: DataTypes.DECIMAL(12, 3).UNSIGNED,
        total_final: DataTypes.DECIMAL(12, 3).UNSIGNED,
        id_promocion: DataTypes.MEDIUMINT.UNSIGNED,
        id_producto: DataTypes.INTEGER.UNSIGNED,
        id_pedido: DataTypes.MEDIUMINT.UNSIGNED
    },
    { sequelize, tableName: "pedidos_productos", timestamps: false }
);