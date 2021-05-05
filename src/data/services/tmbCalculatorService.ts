import { Any } from "typeorm";
import { TMBCalculatorModel } from "../../domain/models/tmbCalculatorModel";
import { TMBCalculatorUseCase } from "../../domain/useCases/tmbCalculatorUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/pessoaRepository";
import { IRetornarIdade } from "../helpers/IRetornarIdade";

export class TMBCalculatorService implements TMBCalculatorUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private retornarIdade: IRetornarIdade,

    ) { }

    async calculate(idPessoa: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }
        const idade =  this.retornarIdade.retornar(pessoa.data_nascimento, new Date())
        console.log(idade)
        // if(pessoa.sexo === "M")
        
        // let tmb = (10 * pessoa.peso_atual) + (6.25 * pessoa.altura) - (5 * )
        return Any
    }

}