import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

class Players extends Model{
    declare id: number;
    declare team: number;
    declare dni: number;
    declare firstName: string;
    declare lastName: string;
    declare birthDate: Date;
    declare shirtNumber: number;
    declare active: boolean;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Players.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    team: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Teams,
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
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            isValidAge(value: Date) {                
                let birthYear = value.getFullYear();
                let currentYear = new Date().getFullYear();
                if (birthYear > (currentYear - 6))
                    throw new Error('Player must be at least 5 years old');
            }
        }
    },
    shirtNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'players',
    timestamps: true,
    underscored: true
});

Players.belongsTo(Teams, { foreignKey: 'team' });


export default Players;