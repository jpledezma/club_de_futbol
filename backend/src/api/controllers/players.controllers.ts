import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";
import playersService from "../services/players.service.js"

async function getPlayers (req: Request, res: Response) {
    try {
        const players = await playersService.getPlayers();
        console.log(players);
        
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
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const playerFound = await playersService.getPLayerById(+id);
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
        await playersService.createPlayer(player);
        res.status(200);
        res.json({ message: "Player created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updatePlayer(req: Request, res: Response) {
    const { id } = req.params;
    const newPlayerData = req.body;
    
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const updatedPlayer = await playersService.updatePlayer(+id, newPlayerData);
        if (updatedPlayer[0] === 0) {
            res.status(404);
            res.json({ 404: "Player not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Player updated successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function deletePlayer(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const deletedPlayer = await playersService.deletePLayer(+id);
        if (deletedPlayer === 0) {
            res.status(404);
            res.json({ 404: "Player not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Player deleted successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

export { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
