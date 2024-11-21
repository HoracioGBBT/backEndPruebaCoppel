import express from "express";
import { DataSource } from "typeorm";

// Configuración de la base de datos (cargada desde ormconfig.json)
const AppDataSource = new DataSource({
    ...require("./ormconfig.json"),
});

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar rutas (un ejemplo básico)
app.get("/", (req, res) => {
    res.send("¡Servidor Express funcionando!");
});

// Inicializar la base de datos y arrancar el servidor
const PORT = 3000; // Cambia el puerto si es necesario

AppDataSource.initialize()
    .then(() => {
        console.log("¡Conexión a la base de datos establecida!");

        // Iniciar el servidor Express
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error durante la inicialización de la base de datos:", error);
    });
