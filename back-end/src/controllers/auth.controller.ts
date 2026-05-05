import type { Request, Response } from "express";
import { findUser, createUser } from "../service/auth.service.js";
import handlePrismaError from "../utils/handlePrismaError.js";

export async function login(req: Request, res: Response) {
    try {
        const { username, password } = req.body;
        const result = await findUser(username, password);
        return res.status(result.status).json(result);
    } catch (error) {
        return handlePrismaError(error, res);
    }
}

export async function register(req: Request, res: Response) {
    try {
        const { username, password } = req.body;
        const result = await createUser(username, password);
        return res.status(result.status).json(result);
    } catch (error) {
        return handlePrismaError(error, res);
    }
}