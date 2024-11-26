import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller.interface";
import { ActivityMapper } from "../../mapper/activity.mapper";
import { GetAllActivityUseCase } from "../../usecase/activity/get-all-activity.usecase";
import { Activity } from "../../model/activity";
import { SaveActivityUseCase } from "../../usecase/activity/save-activity.usecase";

export class SaveActivityController implements Controller{

    constructor(private readonly saveActivityUseCase: SaveActivityUseCase){}

    async run( req: Request, resp: Response ): Promise<any>{
        
        try {
            console.log(req.query);
            //const Activities: Activity[] = await this.saveActivityUseCase.run(req.query);
            return resp.json({
                ok: true,
                //Activities
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