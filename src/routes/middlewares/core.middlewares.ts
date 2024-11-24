import { UserRoutes } from "../core/user.routes"; 

export class CoreRoutingMiddleware {
    run( server: any ) {
        
        let userRoutes = new UserRoutes();
        
        server.app.use('/user', userRoutes.run());

    
        return ( req: any, response: any, next: any ) => {
            next();
        }
    }
}
