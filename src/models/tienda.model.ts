import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface TiendaAttributes {
    id: number;
    estado: number;
    nombre: string;
}

interface TiendaCreationAttributes
    extends Optional<TiendaAttributes, "id"> { }

export class Tienda
    extends Model<TiendaAttributes, TiendaCreationAttributes>
    implements TiendaAttributes {
    public id!: number;
    public estado!: number;
    public nombre!: string;
}

Tienda.init(
    {
        id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "tiendas",
        timestamps: false
    }
);