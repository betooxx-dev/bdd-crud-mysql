import express from "express";
import morgan from "morgan";

import tiendaRoutes from "./routes/tienda.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/tienda", tiendaRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;