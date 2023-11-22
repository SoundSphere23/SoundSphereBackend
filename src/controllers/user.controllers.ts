import { Response, Request } from "express";

// ejemplos de función => controller
export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send("Get all users")
}