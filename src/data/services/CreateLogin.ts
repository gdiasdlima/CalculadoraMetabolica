
import { Login } from "../../domain/models/SignUpRequestModel";
import { AlreadyExistsError } from "../../presentation/errors/alreadyExistsError";
import { Encrypter } from "../contracts/encrypter";
import { ILoginRepository } from "../contracts/loginRepository";
import { LoginModel } from "../models/login";
import { PessoaModel } from "../models/pessoa";

export class CreateLoginService implements CreateLoginService {

    constructor(
        private readonly encrypter: Encrypter,
        private readonly loginRepository: ILoginRepository
    ) { }

    async create(data: Login): Promise<any> {

        const alreadyLogin = await this.loginRepository.findByEmail(data.email);

        if (alreadyLogin) {
            return new AlreadyExistsError('email');
        }
        const password = await this.encrypter.encrypt(data.senha)

       

        const login = new LoginModel()
        login.senha = password
        login.email = data.email
        login.ativo = 'S'
        login.data_alteracao = new Date()

        console.log(login)
        return await this.loginRepository.create(login)
    }
}