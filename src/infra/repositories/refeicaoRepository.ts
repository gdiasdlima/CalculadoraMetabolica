import { getRepository } from "typeorm";
import { IRefeicaoRepository } from "../../data/contracts/repositories/refeicao";
import { Refeicao } from "../../data/entities/refeicao";
import { GetRefeicaoModel } from "../../domain/models/getRefeicaoModel";

export class RefeicaoRepository implements IRefeicaoRepository {


    async create(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao)

        return await refeicaoRepository.save(data)
    }

    async findByRefeicao(data: GetRefeicaoModel): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.findOne({ where: { pessoa: {id : data.idPessoa}, tipoRefeicao: {id: data.idTipoRefeicao}, data_refeicao: {data_refeicao: data.dataRefeicao} } });

        return refeicao;
    }

    async update(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);

        const { id } = data

       await refeicaoRepository.update({ id }, data)

        const refeicao = await refeicaoRepository.findOne(data);

        return refeicao
    }
}