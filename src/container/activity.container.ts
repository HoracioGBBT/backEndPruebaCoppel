import { GetAllActivitiesController } from "../controller/activity/get-all-activities.controller";
import { SaveActivityController } from "../controller/activity/save-activity.controller";
import { LoginUserController } from "../controller/user/user-login.controller";
import { ActivityRepositoryMysql } from "../database/activity.repository.mysql";
import { ActivityMapper } from "../mapper/activity.mapper";
import { GetAllActivityUseCase } from "../usecase/activity/get-all-activity.usecase";
import { SaveActivityUseCase } from "../usecase/activity/save-activity.usecase";


const activityMapper = new ActivityMapper();
const activityRepository = new ActivityRepositoryMysql(activityMapper);
/**
 * UseCases
 */
const getAllActivityUseCase = new GetAllActivityUseCase(activityRepository);
const saveActivityUseCase = new SaveActivityUseCase(activityRepository);
/**
 * Controllers
 */
export const getAllActivityController = new GetAllActivitiesController(getAllActivityUseCase);
export const saveActivityController = new SaveActivityController(saveActivityUseCase,activityMapper);