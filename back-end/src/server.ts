import express from "express";
import cors from "cors";
import prisma from "./lib/prisma.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.users.findFirst({
    where: { username },
  });

  if (!user) {
    return res.status(404).json({ success: false, error: "Usuário não encontrado" });
  }

  if (user?.password_hash !== password) {
    return res.status(401).json({ success: false, error: "Senha incorreta" });
  }

  res.json({ success: true, message: "Usuário encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});