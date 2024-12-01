import express from "express";
import cors from "cors";
import { route } from "./routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

const PORT = 3000;
app.listen(PORT, () => console.log(`🌸 Server rodando na PORTA:${PORT} 🌸`));
