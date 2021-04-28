import { getRepository } from "typeorm";
import { ILoginRepository } from "../../data/contracts/loginRepository";
import { LoginModel } from "../../data/models/login";
import { Login } from "../../domain/models/login";

export class LoginRepository implements ILoginRepository {


    async create(user: Login): Promise<Login>{
        const userRepository = getRepository(LoginModel)
    
        return await userRepository.save(user)
    }
}