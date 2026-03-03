import express from "express";
import tiendaRoutes from "./routes/tienda.routes";

const app = express();

app.use(express.json());
app.use("/api/tiendas", tiendaRoutes);

export default app;