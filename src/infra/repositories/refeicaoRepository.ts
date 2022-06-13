import { getRepository } from "typeorm";
import { IRefeicaoRepository } from "../../data/contracts/repositories/refeicao";
import { Refeicao } from "../../data/entities/refeicao";

export class RefeicaoRepository implements IRefeicaoRepository {


    async create(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao)

        return await refeicaoRepository.save(data)
    }

    async findByIDPessoa(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.findOne({ where: { pessoa: {id : data.pessoa.id}, tipoRefeicao: {id: data.tipoRefeicao.id}, data_refeicao: {data_refeicao: data.data_refeicao} } });

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