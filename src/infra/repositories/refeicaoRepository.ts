import { getRepository } from "typeorm";
import { IRefeicaoRepository } from "../../data/contracts/repositories/refeicao";
import { Refeicao } from "../../data/entities/refeicao";

export class RefeicaoRepository implements IRefeicaoRepository {


    async create(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao)
        return await refeicaoRepository.save(data)
    }


    async findByRefeicao(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.findOne({ where: { pessoa: { id: data.pessoa.id }, tipoRefeicao: { id: data.tipoRefeicao.id }, data_refeicao: data.data_refeicao }, relations: ['tipoRefeicao', 'alimento'] });
        return refeicao;
    }

    async findByID(id: number): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.findOne({ where: { id }, relations: ['TipoRefeicao']});

        return refeicao;
    }

    async getAllRefeicao(data: Refeicao): Promise<Refeicao[]> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.find({ where: { pessoa: { id: data.pessoa.id }, data_refeicao: data.data_refeicao }, relations: ['tipoRefeicao', 'alimento'] });
        return refeicao;
    }

    async update(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);

        const { id } = data

        await refeicaoRepository.update({ id }, data)

        const refeicao = await refeicaoRepository.findOne({where:{data},  relations: ['tipoRefeicao', 'alimento']});

        return refeicao
    }

    async delete(data: Refeicao): Promise<void> {
        const refeicaoRepository = getRepository(Refeicao)
        await refeicaoRepository.delete(data)
    }
}