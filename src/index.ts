import "reflect-metadata"
import bodyParser from 'body-parser'
import { ServerExpress } from "./config/server";
import { AppDataSource } from "./config/typeorm"; 
import logger from "./logger/logger";
import path from "path";
import cors from 'cors';
import { RoutingModules } from "./middlewares/routing-modules.middleware"; 

const server = new ServerExpress;

 server.app.use(bodyParser.json({limit:'50mb'}));
 server.app.use(cors());

 
const routingModules = new RoutingModules();
server.app.use(routingModules.run(server));




server.startServer(async()=>{
    logger.info('servidor corriendo en el puerto: ' + server.port);
    try{
        await AppDataSource.initialize();        
        logger.info('Conectado a la base de datos');
        
    }catch(err){
        logger.error(err);        
    }
});