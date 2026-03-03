import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class ProductoStock extends Model { }

ProductoStock.init(
    {
        id: { type: DataTypes.MEDIUMINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        cantidad: DataTypes.DECIMAL(8, 3),
        id_tienda: DataTypes.SMALLINT.UNSIGNED,
        id_producto: DataTypes.INTEGER.UNSIGNED,
        fecha_ingreso: DataTypes.DATEONLY
    },
    { sequelize, tableName: "productos_stocks", timestamps: false }
);