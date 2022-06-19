import { ExercicioModel } from "../models/exercicioModel";

export interface GetExercicioUseCase {
    get(data: ExercicioModel): Promise<any>
}