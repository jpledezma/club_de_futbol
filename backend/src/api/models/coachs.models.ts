import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

class Coachs extends Model {
    declare id: number;
    declare team: number;
    declare dni: number;
    declare firstName: string;
    declare lastName: string;
    declare address: string;
    declare phoneNumber: string;
    declare email: string | null;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Coachs.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    team: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Teams',
            key: 'id'
        },
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
    tableName: "coachs",
    timestamps: true,
    underscored: true
});

Coachs.belongsTo(Teams, { foreignKey: 'team' });

export default Coachs;