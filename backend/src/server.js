const express = require('express')
const app = express()

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`🌸 Server listening on PORT:${PORT}`));