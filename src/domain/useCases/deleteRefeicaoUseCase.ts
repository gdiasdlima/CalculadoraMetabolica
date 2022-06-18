import { Refeicao } from "../../data/entities/refeicao";

export interface DeleteRefeicaoUseCase {
    delete(data: Refeicao): Promise<any>
}