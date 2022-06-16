import { GetAlimentosByIDUseCase } from "../../domain/useCases/getAlimentosByIDUseCase";
import { GetAllAlimentosUseCase } from "../../domain/useCases/getAllAlimentosUseCase";
import { AlimentoRepository } from "../../infra/repositories/alimentoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";

export class GetAllAlimentosService implements GetAllAlimentosUseCase {

    constructor(
        private readonly alimentoRepository: AlimentoRepository
    ) { }

    async getAll(): Promise<any> {

        const alimentos = await this.alimentoRepository.getAll()

        if (!alimentos) {
            throw new NotFoundError('Alimentos nao encontrados')
        }
        return alimentos
    }

}