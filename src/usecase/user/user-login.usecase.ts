import { UseCase } from "../../interfaces/usecase.interface";
import { User } from "../../model/user";
import { UserRepository } from "../../repository/user.repository";


export class LoginUserUseCase implements UseCase<User> {
    constructor(
        private userRepository: UserRepository
        
    ) {}

    async run(params: any): Promise<User> {
        const userLogin: User = await this.userRepository.getByParams(params);

        if(!userLogin){
            throw new Error("Usuario o contraseña incorrecta");
        }

        return userLogin;
    }
}
