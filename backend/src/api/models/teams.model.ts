import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

class Teams extends Model{
    declare id: number;
    declare category: number;
    declare active: boolean;
}

Teams.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    tableName: 'teams',
    timestamps: false,
    underscored: true
});


export default Teams;