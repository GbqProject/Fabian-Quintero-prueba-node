import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Producto extends Model { }

Producto.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
        estado: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false },
        kit: DataTypes.TINYINT.UNSIGNED,
        barcode: DataTypes.STRING(30),
        nombre: DataTypes.STRING(60),
        presentacion: DataTypes.STRING(25),
        descripcion: DataTypes.STRING(500),
        foto: DataTypes.STRING(120),
        peso: DataTypes.DECIMAL(6, 2)
    },
    { sequelize, tableName: "productos", timestamps: false }
);