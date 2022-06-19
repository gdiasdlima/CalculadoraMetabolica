import { UpdateExercicioService } from "../../../data/services/updateExercicioService"
import { ExercicioRepository } from "../../../infra/repositories/exercicioRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { TipoExercicioRepository } from "../../../infra/repositories/tipoExercicioRepository"
import { UpdateExercicioController } from "../../../presentation/controllers/updateExercicioController"
import { makeGetAllExercicioValidator } from "../validations/getAllExercicioControllerFactory"

export const MakeUpdateExercicioControllerFactory = (): UpdateExercicioController => {
    const pessoaRepository = new PessoaRepository()
    const exercicioRepository = new ExercicioRepository()
    const tipoRepository = new TipoExercicioRepository()
    const updateExercicioService = new UpdateExercicioService(pessoaRepository, exercicioRepository, tipoRepository)
    return new UpdateExercicioController(makeGetAllExercicioValidator(), updateExercicioService)
}