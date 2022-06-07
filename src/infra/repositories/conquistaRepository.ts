import { getRepository } from "typeorm";
import { IConquistaRepository } from "../../data/contracts/repositories/conquista";
import { Conquista } from "../../data/entities/conquista";

export class ConquistaRepository implements IConquistaRepository {


    async create(data: Conquista): Promise<Conquista> {
        const conquistaRepository = getRepository(Conquista)

        return await conquistaRepository.save(data)
    }

    async findByIDPessoa(id_pessoa: number): Promise<Conquista> {
        const conquistaRepository = getRepository(Conquista);
        const conquista = await conquistaRepository.findOne({ where: { pessoa: {id : id_pessoa} } });

        return conquista;
    }
    async update(data: Conquista): Promise<void> {
        const conquistaRepository = getRepository(Conquista);

        const { id } = data

        await conquistaRepository.update({ id }, data)
    }
}