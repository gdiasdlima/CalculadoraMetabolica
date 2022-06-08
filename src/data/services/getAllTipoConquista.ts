import { GetAllTipoConquistaUseCase } from "../../domain/useCases/getAllTipoConquista";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { ITipoConquistaRepository } from "../contracts/repositories/tipoConquista";

export class GetAllTipoConquista implements GetAllTipoConquistaUseCase {

    constructor(
        private readonly tipoConquista: ITipoConquistaRepository
    ) { }

    async getAll(): Promise<any> {

        const conquista = await this.tipoConquista.getAll()

        if (!conquista) {
            throw new NotFoundError('Conquistas')
        }

        return conquista
    }

}