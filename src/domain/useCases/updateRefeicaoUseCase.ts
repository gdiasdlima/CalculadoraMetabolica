import { Refeicao } from "../../data/entities/refeicao";

export interface UpdateRefeicaoUseCase {
    calculate(data: Refeicao): Promise<any>
}