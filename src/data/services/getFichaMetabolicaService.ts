import { GetFichaMetabolicaUseCase } from "../../domain/useCases/getMetabolicaUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IFichaMetabolicaRepository } from "../contracts/repositories/fichaMetabolica";
import { IPessoaRepository } from "../contracts/repositories/pessoa";

export class GetFichaMetabolicaService implements GetFichaMetabolicaUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private readonly fichaRepository: IFichaMetabolicaRepository

    ) { }

    async getByID(idPessoa: number): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(idPessoa)

        if(!pessoa){
            throw new NotFoundError('Pessoa nao existe')
        }

        const ficha = await this.fichaRepository.findByIDPessoa(pessoa.id)

        return ficha
    }
    
}