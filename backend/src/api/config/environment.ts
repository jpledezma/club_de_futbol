import { config } from "dotenv";

config();

const enviroment = {
    port: process.env.PORT || 3000,
};

export default enviroment;
