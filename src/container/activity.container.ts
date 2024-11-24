import { LoginUserController } from "../controller/user/user-login.controller";
import { ActivityRepositoryMysql } from "../database/activity.repository.mysql";
import { ActivityMapper } from "../mapper/activity.mapper";
import { GetAllActivityUseCase } from "../usecase/activity/get-all-activity.usecase";


const activityMapper = new ActivityMapper();
const activityRepository = new ActivityRepositoryMysql(activityMapper);
/**
 * UseCases
 */
const getAllActivityUseCase = new GetAllActivityUseCase(activityRepository);

/**
 * Controllers
 */
export const GetAllActivityController = new GetAllActivityrController(getAllActivityUseCase,activityMapper);