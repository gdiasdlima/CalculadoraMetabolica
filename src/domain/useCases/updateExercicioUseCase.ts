import { Exercicio } from "../../data/entities/exercicio";

export interface UpdateExercicioUseCase {
    update(data: Exercicio): Promise<any>
}