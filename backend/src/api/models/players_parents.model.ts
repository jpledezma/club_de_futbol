import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Players from "./players.model.js";
import Parents from "./parents.model.js";

const PlayersParents = sequelize.define('PlayersParents', {
    parentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Parents',
            key: 'id'
        },
    },
    playerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Players',
            key: 'id'
        },
    },
}, {
    tableName: 'players_parents',
    timestamps: false,
    underscored: true
});

PlayersParents.belongsTo(Players, { foreignKey: 'playerId', as: 'player' });
PlayersParents.belongsTo(Parents, { foreignKey: 'parentId', as: 'parent' });


export default PlayersParents;