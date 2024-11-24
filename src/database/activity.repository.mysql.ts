import { AppDataSource } from "../config/typeorm";
import { ActivityEntity } from "../entity/activity.entity";
import { ActivityMapper } from "../mapper/activity.mapper";
import { Activity } from "../model/activity";
import { ActivityRepository } from "../repository/activity.repository";




export class ActivityRepositoryMysql implements ActivityRepository {
    constructor(
        private readonly activityMapper: ActivityMapper,
    ) { }    

   async getAll(params: any): Promise<Activity[]> {
        const userRepository = AppDataSource.getRepository(ActivityEntity);
        const activityEntity = await userRepository.find({
            where: {
                user:{idUser:params.idUser}
            },
            relations:{
                user:true
            }
        }
        
    )

        return this.activityMapper.toModelList(activityEntity)
    }
   async save(activity: Activity): Promise<any> {
        const activityRepository = AppDataSource.getRepository(ActivityEntity);
        const activityEntity = await activityRepository.save(this.activityMapper.toEntity(activity))
        return activityEntity
    }
}