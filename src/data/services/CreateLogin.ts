
import { Login } from "../../domain/models/login";
import { LoginRepository } from "../../infra/repositories/loginRepository";
import { Encrypter } from "../contracts/encrypter";
import { LoginModel } from "../models/login";

export class CreateLoginService implements CreateLoginService {

    constructor(
        private readonly encrypter: Encrypter,
        private readonly loginRepository: LoginRepository
    ) { }

    async create(data: Login): Promise<Login> {

        const password = await this.encrypter.encrypt(data.senha)

        const login = new LoginModel()
        login.nome = data.nome
        login.senha = password
        login.email = data.email
        login.ativo = 'S'
        login.data_alteracao = new Date()
        login.telefone = data.telefone

        return await this.loginRepository.create(login)
    }
}