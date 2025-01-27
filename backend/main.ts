import express from "express";
import cors from 'cors';
import environment from "./src/api/config/environment.js";
import playersRoutes from "./src/api/routes/players.routes.js"
import parentsRoutes from "./src/api/routes/parents.routes.js"
import initializeDatabase from "./src/api/database/index.js";

// settings
const PORT = environment.port;
const app = express();
app.set("PORT", PORT);
initializeDatabase();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/players", playersRoutes);
app.use("/api/parents", parentsRoutes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
