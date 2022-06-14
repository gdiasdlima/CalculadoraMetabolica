import { GetRefeicaoModel } from "../../../domain/models/getRefeicaoModel";
import { Refeicao } from "../../entities/refeicao";

export interface IRefeicaoRepository {
    create(data: Refeicao): Promise<Refeicao>
    findByRefeicao(data: GetRefeicaoModel) : Promise<Refeicao>;
    update(data: Refeicao): Promise<Refeicao>;
}