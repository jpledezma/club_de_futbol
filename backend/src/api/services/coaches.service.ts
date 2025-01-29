import Coaches from "../models/coaches.model.js";

async function createCoach(coach: Coaches) {
    const { team, dni, firstName, lastName, address, phoneNumber, email } = coach;
    const newCoach = await Coaches.create({
        team,
        dni,
        firstName,
        lastName,
        address,
        phoneNumber,
        email
    });

    return newCoach;
}

async function getCoaches() {
    const coaches = await Coaches.findAll();
    return coaches;
}

async function getCoachById(id: number) {
    const coach = await Coaches.findByPk(id);
    return coach;
}

async function updateCoach(id: number, newCoach: object) {
    const coach =  await Coaches.update(
        newCoach, {
            where: { id: id }
        }
    );

    return coach;
}

async function deleteCoach(id: number) {
    const coach = await Coaches.destroy({ where: { id: id } });
    return coach;
}

export default {
    createCoach,
    getCoaches,
    getCoachById,
    updateCoach,
    deleteCoach,
};
