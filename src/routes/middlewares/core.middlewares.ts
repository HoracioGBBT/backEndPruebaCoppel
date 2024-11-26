import { ActivityRoutes } from "../core/activity.routes";
import { UserRoutes } from "../core/user.routes"; 

export class CoreRoutingMiddleware {
    run( server: any ) {
        
        let userRoutes = new UserRoutes();
        let activityRoutes = new ActivityRoutes();

        server.app.use('/user', userRoutes.run());
        server.app.use('/activities', activityRoutes.run());

    
        return ( req: any, response: any, next: any ) => {
            next();
        }
    }
}
