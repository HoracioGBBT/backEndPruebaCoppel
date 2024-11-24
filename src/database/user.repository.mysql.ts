import { AppDataSource } from "../config/typeorm";
import { UserEntity } from "../entity/user.entity";
import { UserMapper } from "../mapper/user.mapper";
import { User } from "../model/user";
import { UserRepository } from "../repository/user.repository";




export class UserRepositoryMysql implements UserRepository {
    constructor(
        private readonly userMapper: UserMapper,
    ) { }    

   async getByParams(params: any): Promise<User> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const userEntity = await userRepository.findOne({
            where: {
                username: params.username,
                password: params.password
            },
            
        }
        
    )

        return this.userMapper.toModel(userEntity)
    }
   async getByPk(idUser: number): Promise<User> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const userEntity = await userRepository.findOne({
            where: {
                idUser: idUser
            }
        }
    )
        return this.userMapper.toModel(userEntity)
    }
    
    
    
    
    // async getAll(params: any): Promise<any> {
    //     const pagination: any = {
    //         page: parseInt(String(params.page || 1)),
    //         size: parseInt(String(params.size || 0))
    //     }
    //     const { limit, offset } = getPagination(pagination.page, pagination.size);
    //     let where: any = {}

    //     if (params.name) {
    //         where.name = Like(`%${params.name}%`);
    //     }

    //     if (params.status) {
    //         where.status = params.status;
    //     } 
    //     if (params.coordination && params.coordination !== 'null') {
    //         where.coordination = params.coordination;
    //     } 

    //     if (params.businessUnit && params.businessUnit !== 'null') {
    //         where.businessUnit = params.businessUnit;
    //     } 

    //     if(params.idForeign && params.idForeign !== 'null'){
    //         where.idForeign = params.idForeign;
    //     }


    //     const distributorRepository = AppDataSource.getRepository(DistributorEntity);
    //     const distributorEntities = await distributorRepository.findAndCount({
    //         where: {
    //             name: where.name,
    //             status: where.status,
    //             coordination: { idCoordination: where.coordination },
    //             businessUnit:{idBusinessUnit: where.businessUnit}  ,
    //             idForeign: where.idForeign,
    //         },
            
    //         relations: {
    //             coordination: true,
    //             businessUnit: true,
    //         },
    //         order: {idDistributor:'ASC'},
    //         skip: offset,
    //         take: limit
    //     });

    //     return getPagingData(distributorEntities, pagination.page, limit);;

    // }
    // async save(distributor: Distributor): Promise<any> {
    //     const distributorRepository = AppDataSource.getRepository(DistributorEntity);
    //     const distributorEntity = this.distributorMapper.toEntity(distributor);
    //     distributor = await distributorRepository.save(this.distributorMapper.toEntity(distributor));
    //     return distributor;
    // }

    // async getByPk(idDistributor: number,): Promise<any> {
    //     const distributorRepository = AppDataSource.getRepository(DistributorEntity);
    //     const distributorEntity = await distributorRepository.findOne({
    //         where: {
    //             idDistributor: idDistributor 
    //         },
    //         relations: {
    //             coordination: {
    //                 businessUnit: true
    //             },
    //             businessUnit: true,
    //         },
    //     });
    //     const distributor = this.distributorMapper.toModel(distributorEntity);
    //     return distributor;
    // }



}