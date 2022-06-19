import { GetExercicioService } from "../../../data/services/getExercicioService"
import { ExercicioRepository } from "../../../infra/repositories/exercicioRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { TipoExercicioRepository } from "../../../infra/repositories/tipoExercicioRepository"
import { GetExercicioController } from "../../../presentation/controllers/getExercicioController"
import { makeGetAllExercicioValidator } from "../validations/getAllExercicioControllerFactory"

export const MakeGetExercicioControllerFactory = (): GetExercicioController => {
    const pessoaRepository = new PessoaRepository()
    const exercicioRepository = new ExercicioRepository()
    const tipoRepository = new TipoExercicioRepository()
    const getExercicioService = new GetExercicioService(exercicioRepository, pessoaRepository, tipoRepository)
    return new GetExercicioController(makeGetAllExercicioValidator(), getExercicioService)
}