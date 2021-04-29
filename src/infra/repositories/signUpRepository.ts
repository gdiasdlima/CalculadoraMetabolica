import { getRepository } from "typeorm";
import { ILoginRepository } from "../../data/contracts/loginRepository";
import { LoginModel } from "../../data/entities/login";

export class LoginRepository implements ILoginRepository {


    async create(user: LoginModel): Promise<LoginModel>{
        const userRepository = getRepository(LoginModel)
    
        return await userRepository.save(user)
    }
    
    async findByEmail(email: string): Promise<LoginModel> {
        const loginRepository = getRepository(LoginModel);
        const login = await loginRepository.findOne({ where: { email } });

        return login;
    }

    async update(login: LoginModel): Promise<void> {
        const loginRepository = getRepository(LoginModel);

        const { id } = login

        await loginRepository.update({ id }, login)
    }
}