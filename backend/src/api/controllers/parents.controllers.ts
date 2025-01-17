import { Request, Response } from "express";
import { sendServerError } from "../middlewares/middlewares.js";

class Parent{
    id: number;
    dni: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string; // opcional?

    constructor(
        id: number,
        dni: string,
        firstName: string, 
        lastName: string, 
        address: string,
        phoneNumber: string,
        email: string,
    ) {
        this.id = id;
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

const parents = [
    new Parent(0, "12345678", "Albert", "Einstein", "529822", "10", "asd@mail.com"),
    new Parent(1, "23456789", "Isaac", "Newton", "529822", "10", "asd@mail.com"),
    new Parent(2, "34567890", "Michael", "Faraday", "529822", "10", "asd@mail.com"),
    new Parent(3, "45678901", "James", "Maxwell", "529822", "10", "asd@mail.com"),
    new Parent(4, "56789012", "Galileo", "Galilei", "529822", "10", "asd@mail.com"),
];

async function getParents (req: Request, res: Response) {
    try {        
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
        const parentFound = parents[+id];
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
    const parent = req.body;

    try {
        parents.push(parent);
        res.status(200);
        res.json({ message: "Parent created successfully" });
    }
    catch (err: unknown) {
        sendServerError(res, err);
    }
}

async function updateParent(req: Request, res: Response) {
    const { id } = req.params;
    const updatedParent = req.body;
    
    try {
        const parentFound = parents[+id];
        
        if (parentFound) {
            parents[+id] = updatedParent;
            res.status(200);
            res.json({ message: "Parent updated successfully" });
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

async function deleteParent(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const parentFound = parents[+id];
        
        if (parentFound) {
            parents.splice(+id, 1);
            res.status(200);
            res.json({ message: "Parent deleted successfully" });
        }
        else {
            res.status(404);
            res.json({ 404: "Parent not found" });
        }
    }
    catch (err: unknown) {
        sendServerError(res, err)
    }
}

export { getParents, getParentById, createParent, updateParent, deleteParent };
