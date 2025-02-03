import { Request, Response } from "express";
import { sendServerError, validateData } from "../middlewares/server.js";
import playersService from "../services/players.service.js"
import linkService from "../services/players_parents.service.js";
import { validateId, removeExtraWhiteSpaces } from "../middlewares/validations.js";

async function getPlayers (req: Request, res: Response) {
    try {
        const players = await playersService.getPlayers();        
        res.status(200);
        res.json({ payload: players });    
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }    
}

async function getPlayerById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const playerFound = await playersService.getPlayerById(+id);
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
    const { team, dni, firstName, lastName, birthDate, shirtNumber, active } = req.body;

    try {
        validateData({ team, dni, firstName, lastName, birthDate, shirtNumber, active });

        await playersService.createPlayer(
            +team,
            +dni,
            removeExtraWhiteSpaces(firstName),
            removeExtraWhiteSpaces(lastName),
            birthDate,
            shirtNumber,
            active
        );
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
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");
        validateData(newPlayerData);

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
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const deletedPlayer = await playersService.deletePlayer(+id);
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

async function linkPlayerParent(req: Request, res: Response) {
    const { playerId, parentId } = req.body;
    try {
        if (!validateId(+playerId))
            throw new Error("Invalid format for 'playerId'");
        if (!validateId(+parentId))
            throw new Error("Invalid format for 'parentId'");

        const link = await linkService.linkPlayerParent(playerId, parentId);
        if (!link) {
            res.status(500);
            res.json({ error: "Link could not be established" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Link established successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

async function getParents(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const parents = await linkService.getParents(+id);
        if (parents.length === 0) {
            res.status(404);
            res.json({ error: "No parents found" });
            return;
        }
        
        res.status(200);
        res.json({ payload: parents });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

async function deleteParentLink(req: Request, res: Response) {
    const { id } = req.params;
    const { parentId } = req.body;
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");
        if (!validateId(+parentId))
            throw new Error("Invalid format for 'parentId'");

        const link = await linkService.deleteLink(parentId, +id);
        if (link === 0) {
            res.status(404);
            res.json({ error: "No link found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Link removed succesfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

export {
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer,
    linkPlayerParent,
    getParents,
    deleteParentLink,
};
