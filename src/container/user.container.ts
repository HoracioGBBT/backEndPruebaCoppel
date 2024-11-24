import { LoginUserController } from "../controller/user/user-login.controller";
import { UserRepositoryMysql } from "../database/user.repository.mysql";
import { UserMapper } from "../mapper/user.mapper";
import { LoginUserUseCase } from "../usecase/user/user-login.usecase";


const userMapper = new UserMapper();
const roleRepository = new UserRepositoryMysql(userMapper);
/**
 * UseCases
 */
const loginUserUseCase = new LoginUserUseCase(roleRepository);

/**
 * Controllers
 */
export const loginUserController = new LoginUserController(loginUserUseCase,userMapper);


