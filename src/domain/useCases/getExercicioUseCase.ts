import { Exercicio } from "../../data/entities/exercicio";

export interface GetExercicioUseCase {
    getByID(data: Exercicio): Promise<any>
}