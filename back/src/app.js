import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";
import DevicesRouter from "./routes/devices.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/v1", AuthRouter);
app.use("/api/v1", DevicesRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});

export default app;
