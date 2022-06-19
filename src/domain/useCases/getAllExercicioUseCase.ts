import { Exercicio } from "../../data/entities/exercicio";

export interface GetAllExercicioUseCase {
    getAll(data: Exercicio): Promise<any>
}