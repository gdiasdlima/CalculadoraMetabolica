import { ExercicioModel } from "../models/exercicioModel";

export interface GetAllExercicioUseCase {
    getAll(data: ExercicioModel): Promise<any>
}