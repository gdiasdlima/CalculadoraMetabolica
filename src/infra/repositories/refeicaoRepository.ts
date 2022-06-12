import { getRepository } from "typeorm";
import { IRefeicaoRepository } from "../../data/contracts/repositories/refeicao";
import { Refeicao } from "../../data/entities/refeicao";

export class RefeicaoRepository implements IRefeicaoRepository {


    async create(data: Refeicao): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao)

        return await refeicaoRepository.save(data)
    }

    async findByIDPessoa(id_pessoa: number): Promise<Refeicao> {
        const refeicaoRepository = getRepository(Refeicao);
        const refeicao = await refeicaoRepository.findOne({ where: { pessoa: {id : id_pessoa} } });

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