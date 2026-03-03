import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class ProductoCategoria extends Model { }

ProductoCategoria.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
        id_categoria: DataTypes.SMALLINT.UNSIGNED,
        id_producto: DataTypes.INTEGER.UNSIGNED
    },
    { sequelize, tableName: "productos_categorias", timestamps: false }
);