import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller.interface";
import { ActivityMapper } from "../../mapper/activity.mapper";
import { GetAllActivityUseCase } from "../../usecase/activity/get-all-activity.usecase";
import { Activity } from "../../model/activity";
import { SaveActivityUseCase } from "../../usecase/activity/save-activity.usecase";

export class SaveActivityController implements Controller{

    constructor(private readonly saveActivityUseCase: SaveActivityUseCase, private readonly activityMapper: ActivityMapper){}

    async run( req: Request, resp: Response ): Promise<any>{
        try {
            const activitySaved = this.activityMapper.toModel(req.body.params);
            console.log(activitySaved)
            const Activities: Activity[] = await this.saveActivityUseCase.run(activitySaved);
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