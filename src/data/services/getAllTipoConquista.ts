import { GetAllTipoConquistaUseCase } from "../../domain/useCases/getAllTipoConquista";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { ITipoConquistaRepository } from "../contracts/repositories/tipoConquista";

export class getAllTipoConquista implements GetAllTipoConquistaUseCase {

    constructor(
        private readonly tipoConquista: ITipoConquistaRepository
    ) { }

    async getAll(): Promise<any> {

        const alimentos = await this.tipoConquista.getAll()

        if (!alimentos) {
            throw new NotFoundError('Conquistas')
        }

        return alimentos
    }

}