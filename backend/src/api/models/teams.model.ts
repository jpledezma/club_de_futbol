import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Teams = sequelize.define('Teams', {
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
}, {
    tableName: 'teams',
    timestamps: false,
    underscored: true
});


export default Teams;