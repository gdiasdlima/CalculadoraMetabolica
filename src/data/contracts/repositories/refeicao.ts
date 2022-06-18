import { Refeicao } from "../../entities/refeicao";

export interface IRefeicaoRepository {
    create(data: Refeicao): Promise<Refeicao>
    findByRefeicao(data: Refeicao) : Promise<Refeicao>;
    findByID(data: number) : Promise<Refeicao>;
    getAllRefeicao(data: Refeicao) : Promise<Refeicao[]>;
    update(data: Refeicao): Promise<Refeicao>;
}