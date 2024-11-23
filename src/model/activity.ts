import { User } from "./user";

export class Activity {

  
    constructor(  
        public idAct: number | null, 
        public description: string | undefined,
        public actDate: Date | undefined,
        public status: number | undefined,
        public user: User | undefined
    ) {}

  }