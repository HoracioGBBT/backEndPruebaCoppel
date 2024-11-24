import { User } from "../model/user";


export abstract class UserRepository{
    abstract getByParams( params: any ):Promise<User>;
    //abstract save( assetSubtype: AssetBrand ):Promise<any>
    abstract getByPk( idUser: number ):Promise<User>;
}