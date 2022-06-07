import { getRepository } from "typeorm";
import { ITipoConquistaRepository } from "../../data/contracts/repositories/tipoConquista";
import { TipoConquista } from "../../data/entities/tipoConquista";

export class TipoConquistaRepository implements ITipoConquistaRepository {


    async create(data: TipoConquista): Promise<TipoConquista> {
        const tipoConquistaRepository = getRepository(TipoConquista)

        return await tipoConquistaRepository.save(data)
    }

    async findByID(id: number): Promise<TipoConquista> {
        const tipoConquistaRepository = getRepository(TipoConquista);
        const ficha = await tipoConquistaRepository.findOne({ where: { id } });

        return ficha;
    }

    async update(data: TipoConquista): Promise<void> {
        const tipoConquistaRepository = getRepository(TipoConquista);

        const { id } = data

        await tipoConquistaRepository.update({ id }, data)
    }

    async getAll(): Promise<TipoConquista[]> {
        const tipoConquistaRepository = getRepository(TipoConquista);
        const conquista = await tipoConquistaRepository.find()
        return conquista;
    }

}