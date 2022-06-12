import { Refeicao } from "../../entities/refeicao";

export interface IRefeicaoRepository {
    create(data: Refeicao): Promise<Refeicao>
    findByIDPessoa(idPessoa: number) : Promise<Refeicao>;
    update(data: Refeicao): Promise<Refeicao>;
}