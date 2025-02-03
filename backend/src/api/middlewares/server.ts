import { Response } from "express";
import * as validations from "./validations.js";

function sendServerError(res: Response, err: any) {
    res.status(500);
    res.json({
        message: "Internal server error",
        error: err.message
    });
}

function validateData(data: Record<PropertyKey, any>) {
    for (const key in data) {
        switch (key) {
            case "id":
                if (!validations.validateId(data[key]))
                    throw new Error("Invalid format for 'id'");
                break;
            
            case "team":
                if (!validations.validateId(data[key]))
                    throw new Error("Invalid format for 'team'");
                break;
            
            case "dni":
                if (!validations.validateDNI(data[key]))
                    throw new Error("Invalid format for 'dni'");
                break;
            
            case "firstName":
                if (!validations.validateName(data[key]))
                    throw new Error("Invalid format for 'firstName'");
                break;
            
            case "lastName":
                if (!validations.validateName(data[key]))
                    throw new Error("Invalid format for 'lastName'");
                break;
            
            case "phoneNumber":
                if (!validations.validatePhoneNumber(data[key]))
                    throw new Error("Invalid format for 'phoneNumber'");
                break;
            
            case "email":
                if (!validations.validateEmail(data[key]))
                    throw new Error("Invalid format for 'email'");
                break;
            
            case "shirtNumber":
                if (!validations.validateId(data[key]))
                    throw new Error("Invalid format for 'shirtNumber'");
                break;
            
            case "birthDate":
                if (!validations.validateDate(data[key]))
                    throw new Error("Invalid format for 'birthDate'");
                break;
            
            case "category":
                if (!validations.validateId(data[key]))
                    throw new Error("Invalid format for 'category'");
                break;
            
            case "active":
                if (typeof data[key] !== "boolean")
                    throw new Error("Invalid format for 'active'");
                break;
        }
    }
}

export { sendServerError, validateData };
