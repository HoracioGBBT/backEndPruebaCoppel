import { Router } from "express";
import { Routes } from "../../interfaces/routes.interface"; 
import { loginUserController } from "../../container/user.container";

export class UserRoutes implements Routes{
    
    run(): Router {
        const userRoutes = Router();
        
        userRoutes.get('/login',loginUserController.run.bind(loginUserController));

        return userRoutes;

    }
}
