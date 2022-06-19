import { Exercicio } from "../../data/entities/exercicio";

export interface CreateExercicioUseCase {
    create(data: Exercicio): Promise<any>
}