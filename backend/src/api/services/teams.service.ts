import Teams from "../models/teams.model.js";
import Players from "../models/players.model.js";
import Coaches from "../models/coaches.model.js";
import TrainingDays from "../models/training_days.model.js";

async function createTeam(team: Teams) {
    const { category, active } = team;
    const newTeam = await Teams.create({
        category,
        active
    });

    return newTeam;
}

async function getTeams() {
    const teams = await Teams.findAll();
    return teams;
}

async function getPlayers(teamId: number) {
    const players = Players.findAll({
        where: { team: teamId }
    });

    return players;
}

async function getCoaches(teamId: number) {
    const coaches = Coaches.findAll({
        where: { team: teamId }
    });

    return coaches;
}

async function getTrainingDays(teamId: number) {
    const trainingDays = TrainingDays.findAll({
        where: { team: teamId }
    });

    return trainingDays;
}

async function getAllData(teamId: number) {
    const data: Record<string, any[]> = {};
    // Tal vez no sea la forma más eficiente, pero es la más sencilla de implementar
    data.players = await getPlayers(teamId);
    data.coaches = await getCoaches(teamId);
    data.trainingDays = await getTrainingDays(teamId);
    
    return data;
}

async function updateTeam(id: number, newTeam: object) {
    const updatedTeam = await Teams.update(
        newTeam, {
        where: { id: id }
    });

    return updatedTeam;
}

async function deleteTeam(id: number) {
    const deletedTeam = await Teams.destroy({
        where: { id: id }
    });
    
    return deletedTeam;
}

export default {
    createTeam,
    getTeams,
    getCoaches,
    getPlayers,
    getTrainingDays,
    getAllData,
    updateTeam,
    deleteTeam,
};
