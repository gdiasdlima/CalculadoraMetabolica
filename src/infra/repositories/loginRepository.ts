import { getRepository } from "typeorm";
import { ILoginRepository } from "../../data/contracts/loginRepository";
import { Login } from "../../data/models/login";

export class LoginRepository implements ILoginRepository {


    async create(user: Login): Promise<Login>{
        const userRepository = getRepository(Login)
    
        return await userRepository.save(user)
    }
}