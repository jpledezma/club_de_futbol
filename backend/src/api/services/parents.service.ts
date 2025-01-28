import Parents from "../models/parents.model.js";

async function createParent(parent: Parents) {
    const { dni, firstName, lastName, address, phoneNumber, email } = parent;
    const newParent = await Parents.create({
        dni,
        firstName,
        lastName,
        address,
        phoneNumber,
        email
    });

    return newParent;
}

async function getParents() {
    const parents = await Parents.findAll();
    return parents;
}

async function getParentById(id: number) {
    const parent = await Parents.findByPk(id);
    return parent;
}

async function updateParent(id: number, newParent: object) {
    const parent =  await Parents.update(
        newParent, {
            where: { id: id }
        }
    );

    return parent;
}

async function deleteParent(id: number) {
    const parent = await Parents.destroy({ where: { id: id } });
    return parent;
}

export default {
    createParent,
    getParents,
    getParentById,
    updateParent,
    deleteParent,
};
