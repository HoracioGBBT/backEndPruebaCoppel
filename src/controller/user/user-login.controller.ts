import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller.interface";
import { LoginUserUseCase } from "../../usecase/user/user-login.usecase";
import { UserMapper } from "../../mapper/user.mapper";
import { User } from "../../model/user";

export class LoginUserController implements Controller{

    constructor(private readonly loginUserUseCase: LoginUserUseCase, private userMapper: UserMapper){}

    async run( req: Request, resp: Response ): Promise<any>{
        
        try {
   
            const userRequest: User = this.userMapper.toModel(req.query)
            const loggedUser: User = await this.loginUserUseCase.run(userRequest);
            return resp.json({
                ok: true,
                loggedUser
            });
            
        } catch (error: any) {
            console.log(error)
            return resp.json({
                ok: false,
                message: 'Ocurrió un error al iniciar sesión',
                detail: error.message
            });

        }
    }
}