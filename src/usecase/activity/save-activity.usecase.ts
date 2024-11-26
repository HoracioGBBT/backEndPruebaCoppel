import { UseCase } from "../../interfaces/usecase.interface";
import { Activity } from "../../model/activity";
import { ActivityRepository } from "../../repository/activity.repository";


export class SaveActivityUseCase implements UseCase<any> {
    constructor(
        private activityRepository: ActivityRepository
        
    ) {}

    async run(activity: Activity): Promise<any> {
        const activitySaved: Activity = await this.activityRepository.save(activity);

        return activitySaved;
    }
}