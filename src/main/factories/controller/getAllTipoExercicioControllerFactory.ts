import { GetAllTipoExercicioService } from "../../../data/services/getAllTipoExercicioService"
import { TipoExercicioRepository } from "../../../infra/repositories/tipoExercicioRepository"
import { GetAllTipoExercicioController } from "../../../presentation/controllers/getAllTipoExercicioController"

export const MakeGetAllTipoExercicioController = (): GetAllTipoExercicioController => {
    const tipoExercicioRepository = new TipoExercicioRepository()
    const getAllTipoExercicioService = new GetAllTipoExercicioService(tipoExercicioRepository)
    return new GetAllTipoExercicioController(getAllTipoExercicioService)
}