import { Refeicao } from "../../data/entities/refeicao";

export interface GetRefeicaoUseCase {
    get(data : Refeicao): Promise<any>
}