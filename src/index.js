import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT);
console.log(`Servidor en: http://localhost:${PORT}`);