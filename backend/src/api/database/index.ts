import sequelize from "./db.js";
import models from "../models/index.js";

for (const _ in models) { } // para que typescript no me elimine la importacion

async function initializeDatabase() {
    try {
        await sequelize.sync({ force: false });
        console.log("All models were synchronized successfully.");
    }
    catch (error) {
        console.log("Unable to synchronize models.", error);
    }
};

export default initializeDatabase;
