import { SignUpRequestModel } from "../../domain/models/SignUpRequestModel";
import { SignUpUseCase } from "../../domain/useCases/signUpUseCase";
import { AlreadyExistsError } from "../../presentation/errors/alreadyExistsError";
import { Encrypter } from "../contracts/encrypter";
import { ILoginRepository } from "../contracts/loginRepository";
import { IPessoaRepository } from "../contracts/pessoaRepository";
import { AtividadeFisica } from "../entities/atividadeFisica";
import { Login } from "../entities/login";
import { Objetivo } from "../entities/objetivo";
import { Pessoa } from "../entities/pessoa";

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

        const pessoa = new Pessoa()
        pessoa.atividadeFisica = new AtividadeFisica()
        pessoa.objetivo = new Objetivo()
        pessoa.nome = data.nome
        pessoa.data_nascimento = data.dataNascimento
        pessoa.peso_inicial = data.peso
        pessoa.peso_atual = data.peso
        pessoa.telefone = data.telefone
        pessoa.altura = data.altura
        pessoa.cpf = data.cpf
        pessoa.sexo = data.sexo
        pessoa.atividadeFisica.id = data.atividadeFisica
        pessoa.objetivo.id = data.objetivo
        pessoa.litros_agua = data.litrosAgua
        pessoa.circunferencia = data.circunferencia
        const pessoaCreated = await this.pessoaRepository.create(pessoa)

        const login = new Login()
        login.pessoa =  pessoaCreated
        login.senha = password
        login.email = data.email
        login.ativo = 'S'
        login.data_alteracao = new Date()

        return await this.loginRepository.create(login)


    }
}