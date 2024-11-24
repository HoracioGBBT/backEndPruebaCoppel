import {  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";



@Entity({name: 'ACTIVITY'})
export class ActivityEntity {
    @PrimaryGeneratedColumn({name: 'id_act', type: 'integer'})
    idAct!: number;

    @Column({type: 'varchar', length: 200})
    description!: string;

    @Column({name: 'act_date', type: 'datetime'})
    actDate!: Date;

    @Column({type: 'tinyint'})
    status!: number

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'id_user', referencedColumnName: 'idUser' })
    user?: UserEntity;
    
}
