import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Promocion extends Model { }

Promocion.init(
    {
        id: { type: DataTypes.MEDIUMINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        estado: DataTypes.TINYINT.UNSIGNED,
        nombre: DataTypes.STRING(40),
        imagen: DataTypes.STRING(120),
        porcentaje: DataTypes.TINYINT.UNSIGNED,
        dias_semana: DataTypes.STRING(21)
    },
    { sequelize, tableName: "promociones", timestamps: false }
);