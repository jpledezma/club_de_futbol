import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";
import Players from "./players.model.js";
import Parents from "./parents.model.js";

class PlayersParents extends Model{
    declare parent: number;
    declare player: number
}

PlayersParents.init({
    parent: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Parents',
            key: 'id'
        },
    },
    player: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Players',
            key: 'id'
        },
    },
}, {
    sequelize,
    tableName: 'players_parents',
    timestamps: false,
    underscored: true
});

PlayersParents.belongsTo(Players, { foreignKey: 'player' });
PlayersParents.belongsTo(Parents, { foreignKey: 'parent' });


export default PlayersParents;