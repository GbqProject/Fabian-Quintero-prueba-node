import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Categoria extends Model { }

Categoria.init(
    {
        id: { type: DataTypes.SMALLINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        nombre: DataTypes.STRING(30),
        adulto: DataTypes.TINYINT.UNSIGNED
    },
    { sequelize, tableName: "categorias", timestamps: false }
);