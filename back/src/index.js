import app from "./app.js";
import { HOST, PORT } from "./config.js";

app.listen(PORT);
console.log(`Server listening in http://${HOST}:${PORT}`);
