import { Sequelize } from "sequelize";
import environment from "../config/environment.js";

const { db } = environment;

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    port: +db.port,
    dialect: db.dialect as 'mysql' | 'postgres' | 'sqlite' | 'mssql' | 'mariadb',
    logging: false
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
