import express from "express";

const PORT = 3000;

const app = express();

app.set("PORT", PORT);

app.get("/", (req, res) => {
    res.status(200);
    res.send("ESTOY FUNCIONANDO");
});

app.listen(PORT, () => {
    console.log("Server ejecutandose en puerto " + PORT);
});
