import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";
import teamsService from "../services/teams.service.js"

async function getTeams(req: Request, res: Response) {
    try {
        const teams = await teamsService.getTeams();
        res.status(200);
        res.json({ payload: teams });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function getAllData(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const teamFound = await teamsService.getAllData(+id);
        if (teamFound) {
            res.status(200);
            res.json({ payload: teamFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Team not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function getPlayers(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const teamFound = await teamsService.getPlayers(+id);
        if (teamFound) {
            res.status(200);
            res.json({ payload: teamFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Team not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }

}

async function getCoaches(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const teamFound = await teamsService.getCoaches(+id);
        if (teamFound) {
            res.status(200);
            res.json({ payload: teamFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Team not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function getTrainingDays(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const teamFound = await teamsService.getTrainingDays(+id);
        if (teamFound) {
            res.status(200);
            res.json({ payload: teamFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Team not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function createTeam(req: Request, res: Response) {
    const team = req.body;
    try {
        await teamsService.createTeam(team);
        res.status(200);
        res.json({ message: "Team created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updateTeam(req: Request, res: Response) {
    const { id } = req.params;
    const newTeamData = req.body;
    
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const updatedTeam = await teamsService.updateTeam(+id, newTeamData);
        if (updatedTeam[0] === 0) {
            res.status(404);
            res.json({ 404: "Team not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Team updated successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function deleteTeam(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const deletedTeam = await teamsService.deleteTeam(+id);
        if (deletedTeam === 0) {
            res.status(404);
            res.json({ 404: "Team not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Team deleted successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

export {
    getTeams,
    getAllData,
    getPlayers,
    getCoaches,
    getTrainingDays,
    createTeam,
    updateTeam,
    deleteTeam
};
