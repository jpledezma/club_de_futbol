import { config } from "dotenv";

config();

const enviroment = {
    port: process.env.PORT || 3000,
    db: {
        port: process.env.DB_PORT || 3306,
        host: process.env.DB_HOST || "",
        database: process.env.DB_NAME || "",
        user:process.env.DB_USER || "",
        password: process.env.DB_PASSWORD || "",
        dialect: process.env.DB_DIALECT  || "mysql",
    }
};

export default enviroment;
