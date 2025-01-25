import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

const Coachs = sequelize.define('Coachs', {
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
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        },
    },
}, {
    tableName: 'coachs',
    timestamps: true,
    underscored: true
});

Coachs.belongsTo(Teams, { foreignKey: 'teamId', as: 'team' });

export default Coachs;