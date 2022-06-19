import { DeleteExercicioService } from "../../../data/services/deleteExercicioService"
import { ExercicioRepository } from "../../../infra/repositories/exercicioRepository"
import { DeleteExercicioController } from "../../../presentation/controllers/deleteExercicioController"

export const MakeDeleteExercicioControllerFactory = (): DeleteExercicioController => {
    const exercicioRepository = new ExercicioRepository()
    const deleteExercicioService = new DeleteExercicioService(exercicioRepository)
    return new DeleteExercicioController(deleteExercicioService)
}