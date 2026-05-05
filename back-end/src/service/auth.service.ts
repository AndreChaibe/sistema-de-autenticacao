import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export async function findUser(username: string, password: string) {
    const user = await prisma.user.findFirst({ where: { username } });

    if (!user) return { status: 404, error: "Usuário não encontrado" };

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) return { status: 401, error: "Senha incorreta" };

    return { status: 200, message: "Usuário encontrado" };
}

export async function createUser(username: string, password: string) {
    const exists = await prisma.user.findFirst({ where: { username } });
    if (exists) return { status: 409, error: "Usuário já existe" };

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.create({ data: { username, passwordHash } });
    return { status: 201, message: "Usuário criado com sucesso" };
}