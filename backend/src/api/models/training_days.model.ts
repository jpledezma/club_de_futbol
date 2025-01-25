import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

const TrainingDays = sequelize.define('TrainingDays', {
    teamId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        },
    },
    day: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        allowNull: false,
        validate: {
            min: 1,
            max: 7
        }
    },
    hour: {
        type: DataTypes.TIME,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'training_days',
    timestamps: false,
    underscored: true
});

TrainingDays.belongsTo(Teams, { foreignKey: 'teamId', as: 'team' });

export default TrainingDays;