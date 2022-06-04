import { GetAlimentosByIDUseCase } from "../../domain/useCases/getAlimentosByIDUseCase";
import { AlimentoRepository } from "../../infra/repositories/alimentoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IFichaMetabolicaRepository } from "../contracts/repositories/fichaMetabolica";
import { IPessoaRepository } from "../contracts/repositories/pessoa";

export class GetAlimentosByIDService implements GetAlimentosByIDUseCase {

    constructor(
        private readonly alimentoRepository: AlimentoRepository
    ) { }

    async getByID(id: number): Promise<any> {

        const alimento = await this.alimentoRepository.findByID(id)

        if (!alimento) {
            throw new NotFoundError('Pessoa nao existe')
        }

        return alimento
    }

}