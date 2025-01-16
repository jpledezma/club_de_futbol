import { Response } from "express";

function sendServerError(res: Response, err: any) {
    res.status(500);
    res.json({
        message: "Internal server error",
        error: err.message
    });
}

export { sendServerError };
