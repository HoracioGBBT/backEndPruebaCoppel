import { Activity } from "../model/activity";


export abstract class ActivityRepository{
    abstract getAll( params: any ):Promise<Activity[]>;
    abstract save( activity: Activity ):Promise<any>
    //abstract getByPk( idUser: number ):Promise<User>;
}