import { GetAlimentosByIDService } from "../../../data/services/getAlimentosByID"
import { AlimentoRepository } from "../../../infra/repositories/alimentoRepository"
import { GetAlimentoByIDController } from "../../../presentation/controllers/getAlimentoByIDController"
import { makeGetAlimentoByIDValidator } from "../validations/getAlimentosByIDValidatorFactory"

export const MakeGetAlimentoByIDController = (): GetAlimentoByIDController => {
    const alimentoRepository = new AlimentoRepository()
    const getAlimentosByIDService = new GetAlimentosByIDService(alimentoRepository)
    return new GetAlimentoByIDController(makeGetAlimentoByIDValidator(), getAlimentosByIDService)
}