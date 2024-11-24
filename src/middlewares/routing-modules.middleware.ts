import { ServerExpress } from "../config/server";
import { RoutingMiddleware } from "../interfaces/routing-middleware.interface";
import { CoreRoutingMiddleware } from "../routes/middlewares/core.middlewares";

export class RoutingModules implements RoutingMiddleware{
    run( server: ServerExpress ) {
        let routingCore = new CoreRoutingMiddleware();
        server.app.use(routingCore.run(server));

        return ( req: any, response: any, next: any ) => {
            next();
        }
    }
}   