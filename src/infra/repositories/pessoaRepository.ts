import { getRepository } from "typeorm";
import { IPessoaRepository } from "../../data/contracts/pessoaRepository";
import { LoginModel } from "../../data/models/login";
import { PessoaModel } from "../../data/models/pessoa";
import { SignUpRequestModel } from "../../domain/models/SignUpRequestModel";

export class PessoaRepository implements IPessoaRepository {


    async create(user: PessoaModel): Promise<PessoaModel>{
        const userRepository = getRepository(PessoaModel)
    
        return await userRepository.save(user)
    }

    async update(login: PessoaModel): Promise<void> {
        const loginRepository = getRepository(LoginModel);

        const { id } = login

        await loginRepository.update({ id }, login)
    }
}