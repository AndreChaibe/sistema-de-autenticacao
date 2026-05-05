import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})