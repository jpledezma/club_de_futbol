import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";

class Player{
    id: number;
    dni: string;  // usar dni como id?
    firstName: string;
    lastName: string;
    category: number;
    shirtNumber: number;
    active: boolean;
    // Había puesto su tutor/padre como atributo, pero si lo pongo dejaría de estar normalizada la db

    constructor(
        id: number,
        dni: string,
        firstName: string, 
        lastName: string, 
        category: number,
        shirtNumber: number, // position ?
        active: boolean
    ) {
        this.id = id;
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        this.category = category;
        this.shirtNumber = shirtNumber;
        this.active = active;
    }
}

const players = [
    new Player(0, "12345678", "Albert", "Einstein", 2015, 10, true),
    new Player(1, "23456789", "Isaac", "Newton", 2009, 10, true),
    new Player(2, "34567890", "Michael", "Faraday", 2011, 10, false),
    new Player(3, "45678901", "James", "Maxwell", 2010, 10, false),
    new Player(4, "56789012", "Galileo", "Galilei", 2009, 10, false),
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
