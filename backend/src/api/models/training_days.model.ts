import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";
import Teams from "./teams.model.js";

class TrainingDays extends Model{
    declare team: number;
    declare day: number;
    declare hour: string;
}

TrainingDays.init({
    team: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Teams,
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
    sequelize,
    tableName: 'training_days',
    timestamps: false,
    underscored: true
});

TrainingDays.belongsTo(Teams, { foreignKey: 'team' });

export default TrainingDays;