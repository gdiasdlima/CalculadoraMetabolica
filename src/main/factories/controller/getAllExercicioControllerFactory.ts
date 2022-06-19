import { GetAllExercicioService } from "../../../data/services/getAllExercicioService"
import { ExercicioRepository } from "../../../infra/repositories/exercicioRepository"
import { PessoaRepository } from "../../../infra/repositories/pessoaRepository"
import { GetAllExercicioController } from "../../../presentation/controllers/getAllExercicioController"
import { makeGetAllExercicioValidator } from "../validations/getAllExercicioControllerFactory"

export const MakeGetAllExercicioControllerFactory = (): GetAllExercicioController => {
    const pessoaRepository = new PessoaRepository()
    const exercicioRepository = new ExercicioRepository()
    const getAllExercicioService = new GetAllExercicioService(exercicioRepository, pessoaRepository)
    return new GetAllExercicioController(makeGetAllExercicioValidator(), getAllExercicioService)
}