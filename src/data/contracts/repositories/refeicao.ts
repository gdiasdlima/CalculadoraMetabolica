import { Refeicao } from "../../entities/refeicao";

export interface IRefeicaoRepository {
    create(data: Refeicao): Promise<Refeicao>
    findByIDPessoa(data: Refeicao) : Promise<Refeicao>;
    update(data: Refeicao): Promise<Refeicao>;
}