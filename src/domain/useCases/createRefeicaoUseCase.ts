import { Refeicao } from "../../data/entities/refeicao";

export interface CreateRefeicaoUseCase {
    create(data: Refeicao): Promise<any>
}