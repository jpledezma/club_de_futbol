import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

const Players = sequelize.define('Players', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
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
    tableName: 'players',
    timestamps: true,
    underscored: true
});

Players.belongsTo(Teams, { foreignKey: 'teamId', as: 'team' });


export default Players;