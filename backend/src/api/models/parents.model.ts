import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class Parents extends Model {
    declare id: number;
    declare dni: number;
    declare firstName: string;
    declare lastName: string;
    declare address: string;
    declare phoneNumber: string;
    declare email: string | null;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Parents.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isEmail: true
        },
    },
}, {
    sequelize,
    tableName: 'parents',
    timestamps: true,
    underscored: true
});


export default Parents;