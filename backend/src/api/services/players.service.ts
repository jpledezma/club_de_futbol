import Players from "../models/players.model.js";

async function createPlayer(
    team: number,
    dni: number,
    firstName: string,
    lastName: string,
    birthDate: string,
    shirtNumber: number,
    active: boolean
) {
    const newPlayer = await Players.create({
        team,
        dni,
        firstName,
        lastName,
        birthDate,
        shirtNumber,
        active
    });

    return newPlayer;
}

async function getPlayers() {
    const players = await Players.findAll();
    return players;
}

async function getPlayerById(id: number) {
    const player = await Players.findByPk(id);
    return player;
}

async function updatePlayer(id: number, newPlayer: object) {
    const player =  await Players.update(
        newPlayer, {
            where: { id: id }
        }
    );

    return player;
}

async function deletePlayer(id: number) {
    const player = await Players.destroy({ where: { id: id } });
    return player;
}

export default {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer,
};
