import { DataSource } from "typeorm";

import { join } from "path";

export const AppDataSource = new DataSource({
    type: "mssql",
    // type: "mariadb",
    host: 'localhost',
    port: 1433,
    // port: 3306,
    username: 'sa',
    password: '12345',
    database: 'TAREAS',
    options: {
        trustServerCertificate: true, 
      },
    synchronize: false,
    logging: false,
    extra: {
        decimalNumbers: true
    },
    entities: [
        // join(__dirname, "/../../modules/**/*.entity.{js,ts}")
        join(__dirname,"C:/Users/Usuario/Desktop/Back/backEndPruebaCoppel/src/entity/*.entity.{js,ts}")
    ],
    subscribers: [],
    migrations: [],
})