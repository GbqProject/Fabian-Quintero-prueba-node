import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class TiendaPromocion extends Model { }

TiendaPromocion.init(
    {
        id: { type: DataTypes.MEDIUMINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        estado: DataTypes.TINYINT.UNSIGNED,
        inicio: DataTypes.DATEONLY,
        fin: DataTypes.DATEONLY,
        id_tienda: DataTypes.SMALLINT.UNSIGNED,
        id_promocion: DataTypes.MEDIUMINT.UNSIGNED
    },
    { sequelize, tableName: "tiendas_promociones", timestamps: false }
);