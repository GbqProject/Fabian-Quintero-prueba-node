import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Tienda extends Model { }

Tienda.init(
    {
        id: { type: DataTypes.SMALLINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        estado: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false },
        nombre: { type: DataTypes.STRING(30), allowNull: false },
        descripcion: DataTypes.STRING(500),
        telefono: DataTypes.STRING(20),
        direccion: DataTypes.STRING(120),
        direccion_anexo: DataTypes.STRING(40),
        direccion_barrio: DataTypes.STRING(25),
        calificacion: DataTypes.DECIMAL(3, 2),
        calificacion_cantidad: DataTypes.MEDIUMINT.UNSIGNED,
        impuestos: DataTypes.TINYINT.UNSIGNED,
        dias_trabajados: DataTypes.STRING(21)
    },
    { sequelize, tableName: "tiendas", timestamps: false }
);