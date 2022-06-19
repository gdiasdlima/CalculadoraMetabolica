import { ExercicioModel } from "../models/exercicioModel";

export interface CreateExercicioUseCase {
    create(data: ExercicioModel): Promise<any>
}