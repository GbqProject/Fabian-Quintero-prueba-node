import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Pedido extends Model { }

Pedido.init(
    {
        id: { type: DataTypes.MEDIUMINT.UNSIGNED, primaryKey: true, autoIncrement: true },
        instrucciones: DataTypes.STRING(500),
        entrega_fecha: DataTypes.DATEONLY,
        valor_productos: DataTypes.DECIMAL(12, 3).UNSIGNED,
        valor_envio: DataTypes.DECIMAL(10, 3).UNSIGNED,
        valor_descuento: DataTypes.DECIMAL(12, 3).UNSIGNED,
        valor_cupon: DataTypes.DECIMAL(11, 3).UNSIGNED,
        impuestos: DataTypes.TINYINT.UNSIGNED,
        valor_impuestos: DataTypes.DECIMAL(11, 3).UNSIGNED,
        valor_final: DataTypes.DECIMAL(12, 3).UNSIGNED,
        calificacion: DataTypes.DECIMAL(3, 2),
        id_tienda: DataTypes.SMALLINT.UNSIGNED,
        direccion: DataTypes.STRING(160),
        valor_comision: DataTypes.DECIMAL(11, 3).UNSIGNED,
        id_user: DataTypes.MEDIUMINT.UNSIGNED,
        created_at: DataTypes.DATE
    },
    { sequelize, tableName: "pedidos", timestamps: false }
);