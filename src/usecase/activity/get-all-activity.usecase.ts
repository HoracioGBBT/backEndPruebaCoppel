import { UseCase } from "../../interfaces/usecase.interface";
import { Activity } from "../../model/activity";
import { ActivityRepository } from "../../repository/activity.repository";


export class GetAllActivityUseCase implements UseCase<any> {
    constructor(
        private activityRepository: ActivityRepository
        
    ) {}

    async run(params: any): Promise<Activity[]> {
        const activity: Activity[] = await this.activityRepository.getAll(params);

        if(!activity){
            throw new Error("No existe actividad");
        }

        return activity;
    }
}