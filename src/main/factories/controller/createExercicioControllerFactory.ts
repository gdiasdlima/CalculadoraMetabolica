import { CreateExercicioService } from "../../../data/services/createExercicioService"
import { ExercicioRepository } from "../../../infra/repositories/exercicioRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { TipoExercicioRepository } from "../../../infra/repositories/tipoExercicioRepository"
import { CreateExercicioController } from "../../../presentation/controllers/createExercicioController"
import { makeGetAllExercicioValidator } from "../validations/getAllExercicioControllerFactory"

export const makeCreateExercicioControllerFactory = (): CreateExercicioController => {
    const pessoaRepository = new PessoaRepository()
    const exercicioRepository = new ExercicioRepository()
    const tipoRepository = new TipoExercicioRepository()
    const createExercicioService = new CreateExercicioService(exercicioRepository, pessoaRepository, tipoRepository)
    return new CreateExercicioController(makeGetAllExercicioValidator(), createExercicioService)
}