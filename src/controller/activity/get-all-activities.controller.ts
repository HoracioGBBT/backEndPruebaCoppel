import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller.interface";
import { ActivityMapper } from "../../mapper/activity.mapper";
import { GetAllActivityUseCase } from "../../usecase/activity/get-all-activity.usecase";
import { Activity } from "../../model/activity";

export class GetAllActivitiesController implements Controller{

    constructor(private readonly getAllActivityUseCase: GetAllActivityUseCase){}

    async run( req: Request, resp: Response ): Promise<any>{
        
        try {
            
            const Activities: Activity[] = await this.getAllActivityUseCase.run(req.body);
            return resp.json({
                ok: true,
                Activities
            });
            
        } catch (error: any) {
            console.log(error)
            return resp.json({
                ok: false,
                message: 'Ocurrió un error',
                detail: error.message
            });

        }
    }
}