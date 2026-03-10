import express from "express";
import tiendaRoutes from "./routes/tienda.routes";
import productosRoutes from "./routes/productos.routes";

const app = express();

app.use(express.json());
app.use("/healthcheck", (req, res) => res.send("Server running"));
app.use("/api/tiendas", tiendaRoutes);
app.use("/api/productos", productosRoutes);

export default app;