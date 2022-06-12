import { SignUpRequestModel } from "../../domain/models/SignUpRequestModel";
import { SignUpUseCase } from "../../domain/useCases/signUpUseCase";
import { AlreadyExistsError } from "../../presentation/errors/alreadyExistsError";
import { Encrypter } from "../contracts/repositories/encrypter";
import { IFichaMetabolicaRepository } from "../contracts/repositories/fichaMetabolica";
import { ILoginRepository } from "../contracts/repositories/login";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { AtividadeFisica } from "../entities/atividadeFisica";
import { FichaMetabolica } from "../entities/fichaMetabolica";
import { Login } from "../entities/login";
import { Objetivo } from "../entities/objetivo";
import { Pessoa } from "../entities/pessoa";
import { IRetornarIdade } from "../helpers/IRetornarIdade";

export class SignUpService implements SignUpUseCase {

    constructor(
        private readonly encrypter: Encrypter,
        private readonly loginRepository: ILoginRepository,
        private readonly pessoaRepository: IPessoaRepository,
        private readonly fichaMetabolicaRepository: IFichaMetabolicaRepository,
        private retornarIdade: IRetornarIdade

    ) { }

    async create(data: SignUpRequestModel): Promise<any> {
    
        const alreadyLogin = await this.loginRepository.findByEmail(data.email);

        if (alreadyLogin) {
            return new AlreadyExistsError('email');
        }

        const password = await this.encrypter.encrypt(data.senha)

        const pessoa = new Pessoa()
        pessoa.atividadeFisica = new AtividadeFisica()
        pessoa.objetivo = new Objetivo()
        pessoa.nome = data.nome
        pessoa.data_nascimento = data.dataNascimento
        pessoa.peso_inicial = data.peso
        pessoa.peso_atual = data.peso
        pessoa.telefone = 'nao'
        pessoa.altura = data.altura
        pessoa.cpf = 'nao'
        pessoa.sexo = data.sexo
        pessoa.atividadeFisica.id = data.atividadeFisica
        pessoa.objetivo.id = data.objetivo
        pessoa.circunferencia = data.circunferencia
        pessoa.peso_objetivo = data.pesoObjetivo
        const pessoaCreated = await this.pessoaRepository.create(pessoa)

        console.log(pessoaCreated)
        const login = new Login()
        login.pessoa = new Pessoa()
        login.pessoa =  pessoaCreated
        login.senha = password
        login.email = data.email
        login.ativo = 'S'
        login.data_alteracao = new Date()
        const loginCreated = await this.loginRepository.create(login)

        // console.log('login' + loginCreated)

        const idade = this.retornarIdade.retornar(new Date(pessoa.data_nascimento), new Date())

        console.log(idade)
        let tmb, ndc, imc, proteina, carbo, gordura

        if (data.sexo === "M") {
            tmb = (10 * pessoa.peso_atual) + (6.25 * pessoa.altura) - (5 * idade) + 5
            // percentual = 64 - (20 * pessoa.altura / pessoa.circunferencia)

        } else if (data.sexo === "F") {
            tmb = (10 * pessoa.peso_atual) + (6.25 * pessoa.altura) - (5 * idade) - 161
            // percentual = 76 - (20 * pessoa.altura / pessoa.circunferencia)

        }

        switch (data.atividadeFisica) {
            case 1:
                ndc = tmb * 1.2
                break;
            case 2:
                ndc = tmb * 1.375
                break;
            case 3:
                ndc = tmb * 1.55

                break;
            case 4:
                ndc = tmb * 1.725
                break;
            case 5:
                ndc = tmb * 1.9
                break;
        }

        switch (data.objetivo) {
            case 1:
               proteina = data.peso * 2
               carbo = data.peso * 3
               gordura = data.peso
                break;
            case 2:
                proteina = data.peso * 2
                carbo = data.peso * 2
                gordura = data.peso
            case 3:
                proteina = data.peso * 2
                carbo = data.peso * 4
                gordura = data.peso
                break;
        }

        imc = parseFloat(((data.peso / (data.altura * data.altura)) * 10000).toFixed(2))
        // percentual = parseFloat(percentual.toFixed(2))

        const ficha = new FichaMetabolica()
        ficha.pessoa = new Pessoa()
        ficha.pessoa = pessoaCreated
        ficha.tmb = tmb
        ficha.ndc = ndc
        ficha.imc = imc
        ficha.gasto_semanal = ndc * 7
         ficha.percentual_gordura = 20
        ficha.data_calculo = new Date()
        ficha.proteina = proteina
        ficha.carboidrato = carbo
        ficha.gordura = gordura

        // console.log('ficha'+ficha)
        return await this.fichaMetabolicaRepository.create(ficha)

        


    }
}