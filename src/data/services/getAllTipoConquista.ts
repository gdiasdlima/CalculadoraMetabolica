import { GetAllTipoConquistaUseCase } from "../../domain/useCases/getAllTipoConquista";
import { AlimentoRepository } from "../../infra/repositories/alimentoRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";

export class getAllTipoConquista implements GetAllTipoConquistaUseCase {

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