import express from "express";
import tiendaRoutes from "./routes/tienda.routes";
import productosRoutes from "./routes/productos.routes";
import { responseFormatter } from "./middleware/response-formatter";
import { errorHandler } from "./middleware/error-handler";
import categoriaRoutes from "./routes/categoria.routes";
import promocionesRoutes from "./routes/promociones.routes";

const app = express();

app.use(express.json());
app.use(responseFormatter);

app.use("/healthcheck", (req, res) => res.send("Server running"));
app.use("/api/tiendas", tiendaRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/promociones", promocionesRoutes);

app.use(errorHandler);

export default app;