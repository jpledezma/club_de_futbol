import PlayersParents from "../models/players_parents.model.js";
import Players from "../models/players.model.js";
import Parents from "../models/parents.model.js";

async function linkPlayerParent(playerId: number, parentId: number) {
    const link = await PlayersParents.create({
        parent: parentId,
        player: playerId
    });

    return link;
}

async function getParents(playerId: number) {
    const link = await PlayersParents.findAll({
        where: { player: playerId },
        attributes: [],
        include: {
            model: Parents
        }
    });

    return link;
}

async function getChildren(parentId: number) {
    const link = await PlayersParents.findAll({
        where: { parent: parentId },
        attributes: [],
        include: {
            model: Players
        }
    });

    return link;
}

async function deleteLink(parentId: number, playerId: number) {
    const deletedLink = await PlayersParents.destroy({
        where: {
            parent: parentId,
            player: playerId
        }
    });

    return deletedLink;
}

export default{
    linkPlayerParent,
    getChildren,
    getParents,
    deleteLink,
};
