
import { SignUpRequestModel } from "../../domain/models/SignUpRequestModel";
import { SignUpUseCase } from "../../domain/useCases/signUpUseCase";
import { AlreadyExistsError } from "../../presentation/errors/alreadyExistsError";
import { Encrypter } from "../contracts/encrypter";
import { ILoginRepository } from "../contracts/loginRepository";
import { IPessoaRepository } from "../contracts/pessoaRepository";
import { AtividadeFisicaModel } from "../entities/atividadeFisica";
import { LoginModel } from "../entities/login";
import { objetivoModel } from "../entities/objetivo";
import { PessoaModel } from "../entities/pessoa";

export class SignUpService implements SignUpUseCase {

    constructor(
        private readonly encrypter: Encrypter,
        private readonly loginRepository: ILoginRepository,
        private readonly pessoaRepository: IPessoaRepository
    ) { }

    async create(data: SignUpRequestModel): Promise<any> {
    
        const alreadyLogin = await this.loginRepository.findByEmail(data.email);

        if (alreadyLogin) {
            return new AlreadyExistsError('email');
        }

        const alreadyUser = await this.pessoaRepository.findByCPF(data.cpf);
        if (alreadyUser) {
            return new AlreadyExistsError('participante')
        }

        const password = await this.encrypter.encrypt(data.senha)

        const pessoa = new PessoaModel()
        pessoa.atividade_fisica = new AtividadeFisicaModel()
        pessoa.objetivo = new objetivoModel()
        pessoa.nome = data.nome
        pessoa.data_nascimento = data.dataNascimento
        pessoa.peso_inicial = data.peso
        pessoa.peso_atual = data.peso
        pessoa.telefone = data.telefone
        pessoa.altura = data.altura
        pessoa.cpf = data.cpf
        pessoa.sexo = data.sexo
        pessoa.atividade_fisica.id = data.atividadeFisica
        pessoa.objetivo.id = data.objetivo
        pessoa.litros_agua = data.litrosAgua
       
        const pessoaCreated = await this.pessoaRepository.create(pessoa)

        const login = new LoginModel()
        login.pessoa =  pessoaCreated
        login.senha = password
        login.email = data.email
        login.ativo = 'S'
        login.data_alteracao = new Date()

        return await this.loginRepository.create(login)


    }
}