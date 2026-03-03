import app from "./app";
import { sequelize } from "./models";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");

        await sequelize.sync();
        console.log("Models synced");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
}

start();