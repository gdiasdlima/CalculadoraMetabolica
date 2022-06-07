import { GetAlimentosByIDService } from "../../../data/services/getAlimentosByID"
import { GetAllAlimentosService } from "../../../data/services/getAllAlimentos"
import { AlimentoRepository } from "../../../infra/repositories/alimentoRepository"
import { GetAlimentoByIDController } from "../../../presentation/controllers/getAlimentoByIDController"
import { GetAllAlimentosController } from "../../../presentation/controllers/getAllAlimentosController"
import { makeGetAlimentoByIDValidator } from "../validations/getAlimentosByIDValidatorFactory"

export const MakeGetAllAlimentosController = (): GetAllAlimentosController => {
    const alimentoRepository = new AlimentoRepository()
    const getAllAlimentosService = new GetAllAlimentosService(alimentoRepository)
    return new GetAllAlimentosController(getAllAlimentosService)
}