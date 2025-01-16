import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";

const players = [
    { id: 0, name: "Albert Einstein", category: 2010, active: true },
    { id: 1, name: "Isaac Newton", category: 2009, active: true },
    { id: 2, name: "Michael Faraday", category: 2011, active: false },
    { id: 3, name: "James Maxwell", category: 2010, active: false },
    { id: 4, name: "Galileo Galilei", category: 2008, active: true },
];

async function getPlayers (req: Request, res: Response) {
    try {        
        res.status(200);
        res.json({ payload: players });    
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }    
};

async function getPlayerById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const playerFound = players[+id];
        if (playerFound) {
            res.status(200);
            res.json({ payload: playerFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Player not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function createPlayer(req: Request, res: Response) {
    const player = req.body;

    try {
        players.push(player);
        res.status(200);
        res.json({ message: "Player created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updatePlayer(req: Request, res: Response) {
    const { id } = req.params;
    const updatedPlayer = req.body;
    
    try {
        const playerFound = players[+id];
        
        if (playerFound) {
            players[+id] = updatedPlayer;
            res.status(200);
            res.json({ message: "Player updated successfully" });
        }
        else {
            res.status(404);
            res.json({ 404: "Player not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function deletePlayer(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const playerFound = players[+id];
        
        if (playerFound) {
            players.splice(+id, 1);
            res.status(200);
            res.json({ message: "Player deleted successfully" });
        }
        else {
            res.status(404);
            res.json({ 404: "Player not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

export { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
