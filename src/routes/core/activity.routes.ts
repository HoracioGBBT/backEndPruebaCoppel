import { Router } from "express";
import { Routes } from "../../interfaces/routes.interface"; 
import { getAllActivityController, saveActivityController } from "../../container/activity.container";

export class ActivityRoutes implements Routes{
    
    run(): Router {
        const activityRoutes = Router();
        
        activityRoutes.get('/activity',getAllActivityController.run.bind(getAllActivityController));
        activityRoutes.get('/save',saveActivityController.run.bind(saveActivityController));


        return activityRoutes;

    }
}
