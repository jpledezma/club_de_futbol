import Players from "../models/players.model.js";

async function createPlayer(player: Players) {
    const { team, dni, firstName, lastName, birthDate, shirtNumber } = player;
    const newPlayer = await Players.create({
        team,
        dni,
        firstName,
        lastName,
        birthDate,
        shirtNumber,
        active: true
    });

    return newPlayer;
}

async function getPlayers() {
    const players = await Players.findAll();
    return players;
}

async function getPLayerById(id: number) {
    const player = await Players.findByPk(id);
    return player;
}

async function updatePlayer(id: number, newPLayer: any) {
    const player =  await Players.update(
        newPLayer, {
            where: { id: id }
        }
    );

    return player;
}

async function deletePLayer(id: number) {
    const player = await Players.destroy({ where: { id: id } });
    return player;
}

export default {
    createPlayer,
    getPlayers,
    getPLayerById,
    updatePlayer,
    deletePLayer,
}