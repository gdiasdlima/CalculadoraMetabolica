import { GetAllTipoConquistaService } from "../../../data/services/getAllTipoConquista"
import { TipoConquistaRepository } from "../../../infra/repositories/tipoConquistaRepository"
import { GetAllTipoConquistaController } from "../../../presentation/controllers/getAllTipoConquistaController"

export const MakeGetAllTipoConquistaController = (): GetAllTipoConquistaController => {
    const tipoConquistaRepository = new TipoConquistaRepository()
    const getAllTipoConquistaService = new GetAllTipoConquistaService(tipoConquistaRepository)
    return new GetAllTipoConquistaController(getAllTipoConquistaService)
}