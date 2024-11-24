import express from 'express';
import dotenv from '../env/dotenv'
dotenv.config();

export class ServerExpress {

    app: express.Application;
    port: number;    

    constructor() {

        this.app = express();
        this.port = Number(3000);
    }

    startServer(callback: VoidFunction) {
        this.app.listen(this.port, callback);
    }
}