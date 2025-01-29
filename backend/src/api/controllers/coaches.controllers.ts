import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";
import coachesService from "../services/coaches.service.js";

async function getCoaches (req: Request, res: Response) {
    try {
        const coaches = await coachesService.getCoaches();
        res.status(200);
        res.json({ payload: coaches });    
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }    
};

async function getCoachById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!id || isNaN(Number(id.trim())))
            throw new Error("Invalid format for 'id'");

        const coachFound = await coachesService.getCoachById(+id);
        if (coachFound) {
            res.status(200);
            res.json({ payload: coachFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Coach not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function createCoach(req: Request, res: Response) {
    const newCoach = req.body;

    try {
        await coachesService.createCoach(newCoach)
        res.status(200);
        res.json({ message: "Coach created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updateCoach(req: Request, res: Response) {
    const { id } = req.params;
    const newCoachData = req.body;
    
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const updatedCoach = await coachesService.updateCoach(+id, newCoachData)
        if (updatedCoach[0] === 0) {
            res.status(404);
            res.json({ 404: "Coach not found" });
            return;
        }
            res.status(200);
            res.json({ message: "Coach updated successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function deleteCoach(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!id || isNaN(Number(id)))
            throw new Error("Invalid format for 'id'");

        const deletedCoach = await coachesService.deleteCoach(+id);
        
        if (deletedCoach === 0) {
            res.status(404);
            res.json({ 404: "Coach not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Coach deleted successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}


export {
    getCoaches,
    getCoachById,
    createCoach,
    updateCoach,
    deleteCoach,
};
