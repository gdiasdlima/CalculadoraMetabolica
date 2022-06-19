import { ExercicioModel } from "../models/exercicioModel";

export interface UpdateExercicioUseCase {
    update(data: ExercicioModel): Promise<any>
}