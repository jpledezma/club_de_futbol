import express from "express";
import cors from 'cors';
import playersRoutes from "./src/api/routes/players.routes.js"

// settings
const PORT = 3000;
const app = express();
app.set("PORT", PORT);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/players", playersRoutes);

app.listen(PORT, () => {
    console.log("Server ejecutandose en puerto " + PORT);
});
