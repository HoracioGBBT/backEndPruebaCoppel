import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'USERS'})
export class UserEntity {
    @PrimaryGeneratedColumn({name: 'id_user', type: 'integer'})
    idUser!: number;

    @Column({type: 'varchar', length: 200})
    fullname!: string;

    @Column({type: 'varchar', length: 200})
    username!: string;

    @Column({type: 'varchar', length: 200})
    password!: string
    
}
