import { Request, Response } from "express";
import { sendServerError, validateData } from "../middlewares/server.js";
import parentsService from "../services/parents.service.js";
import linkService from "../services/players_parents.service.js";
import { validateId, removeExtraWhiteSpaces } from "../middlewares/validations.js";

async function getParents (req: Request, res: Response) {
    try {
        const parents = await parentsService.getParents();
        res.status(200);
        res.json({ payload: parents });    
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }    
};

async function getParentById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const parentFound = await parentsService.getParentById(+id);
        if (parentFound) {
            res.status(200);
            res.json({ payload: parentFound });
        }
        else {
            res.status(404);
            res.json({ 404: "Parent not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function createParent(req: Request, res: Response) {
    const { dni, firstName, lastName, address, phoneNumber, email } = req.body;

    try {
        validateData({ dni, firstName, lastName, address, phoneNumber, email });

        await parentsService.createParent(
            +dni,
            removeExtraWhiteSpaces(firstName),
            removeExtraWhiteSpaces(lastName),
            removeExtraWhiteSpaces(address),
            phoneNumber,
            email
        )
        res.status(200);
        res.json({ message: "Parent created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updateParent(req: Request, res: Response) {
    const { id } = req.params;
    const newParentData = req.body;
    
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");
        validateData(newParentData);

        const updatedParent = await parentsService.updateParent(+id, newParentData)
        if (updatedParent[0] === 0) {
            res.status(404);
            res.json({ 404: "Parent not found" });
            return;
        }
            res.status(200);
            res.json({ message: "Parent updated successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function deleteParent(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const deletedParent = await parentsService.deleteParent(+id);
        
        if (deletedParent === 0) {
            res.status(404);
            res.json({ 404: "Parent not found" });
            return;
        }
        
        res.status(200);
        res.json({ message: "Parent deleted successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

async function getChildren(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");

        const children = await linkService.getChildren(+id);
        if (children.length === 0) {
            res.status(404);
            res.json({ error: "No children found" });
            return;
        }
        
        res.status(200);
        res.json({ payload: children });
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

async function deletePlayerLink(req: Request, res: Response) {
    const { id } = req.params;
    const { playerId } = req.body;
    try {
        if (!validateId(+id))
            throw new Error("Invalid format for 'id'");
        if (!validateId(+playerId))
            throw new Error("Invalid format for 'playerId'");

        const link = await linkService.deleteLink(+id, playerId);
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
    getParents,
    getParentById,
    createParent,
    updateParent,
    deleteParent,
    getChildren,
    deletePlayerLink,
};
