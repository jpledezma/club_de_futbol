import express from "express";
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());

app.set("PORT", PORT);

app.get("/", (req, res) => {
    res.status(200);
    res.send("ESTOY FUNCIONANDO");
});

app.listen(PORT, () => {
    console.log("Server ejecutandose en puerto " + PORT);
});
 