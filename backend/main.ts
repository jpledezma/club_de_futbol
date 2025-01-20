import express from "express";
import cors from 'cors';
import enviroment from "./src/api/config/environment.js";
import playersRoutes from "./src/api/routes/players.routes.js"
import parentsRoutes from "./src/api/routes/parents.routes.js"

// settings
const PORT = enviroment.port;
const app = express();
app.set("PORT", PORT);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/players", playersRoutes);
app.use("/api/parents", parentsRoutes);

app.listen(PORT, () => {
    console.log("Server ejecutandose en puerto " + PORT);
});
