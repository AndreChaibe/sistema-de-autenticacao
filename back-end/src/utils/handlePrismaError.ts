import type { Response } from "express";
import { Prisma } from "../../generated/prisma/client.js";

function handlePrismaError(error: unknown, res: Response) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
        return res.status(400).json({ error: "Não foi possível processar a solicitação" });
    if (error instanceof Prisma.PrismaClientInitializationError)
        return res.status(503).json({ error: "Não foi possível conectar ao banco de dados" });

    return res.status(500).json({ error: "Erro interno no servidor" });
}

export default handlePrismaError;