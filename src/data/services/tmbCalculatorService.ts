import { Any } from "typeorm";
import { TMBCalculatorModel } from "../../domain/models/tmbCalculatorModel";
import { TMBCalculatorUseCase } from "../../domain/useCases/tmbCalculatorUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/pessoaRepository";

export class TMBCalculatorService implements TMBCalculatorUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository

    ) { }

    async calculate(idPessoa: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }
        
        return Any
    }

}