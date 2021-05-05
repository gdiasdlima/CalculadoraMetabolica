import { getRepository } from "typeorm";
import { ILoginRepository } from "../../data/contracts/loginRepository";
import { Login } from "../../data/entities/login";

export class LoginRepository implements ILoginRepository {


    async create(user: Login): Promise<Login>{
        const userRepository = getRepository(Login)
    
        return await userRepository.save(user)
    }
    
    async findByEmail(email: string): Promise<Login> {
        const loginRepository = getRepository(Login);
        const login = await loginRepository.findOne({ where: { email } });

        return login;
    }

    async update(login: Login): Promise<void> {
        const loginRepository = getRepository(Login);

        const { id } = login

        await loginRepository.update({ id }, login)
    }
}