import { getRepository } from "typeorm";
import { IConquistaRepository } from "../../data/contracts/repositories/conquista";
import { Conquista } from "../../data/entities/conquista";

export class ConquistaRepository implements IConquistaRepository {


    async create(data: Conquista): Promise<Conquista> {
        const fichaMetabolicaRepository = getRepository(Conquista)

        return await fichaMetabolicaRepository.save(data)
    }

    async findByID(id_pessoa: number): Promise<Conquista> {
        const fichaMetabolicaRepository = getRepository(Conquista);
        const ficha = await fichaMetabolicaRepository.findOne({ where: { pessoa: {id : id_pessoa} } });

        return ficha;
    }

    async update(data: Conquista): Promise<void> {
        const fichaMetabolicaRepository = getRepository(Conquista);

        const { id } = data

        await fichaMetabolicaRepository.update({ id }, data)
    }
}