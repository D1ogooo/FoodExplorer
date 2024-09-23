import express from 'express'
import { route } from './routes';
const app = express()

app.use(express.json());
app.use(route)

const PORT = 3000;
app.listen(PORT, () => console.log(`🌸 Server rodando na PORTA:${PORT} 🌸`));