import { getRepository } from "typeorm";
import { ITipoConquistaRepository } from "../../data/contracts/repositories/tipoConquista";
import { TipoConquista } from "../../data/entities/tipoConquista";

export class TipoConquistaRepository implements ITipoConquistaRepository {


    async create(data: TipoConquista): Promise<TipoConquista> {
        const alimentoRepository = getRepository(TipoConquista)

        return await alimentoRepository.save(data)
    }

    async findByID(id: number): Promise<TipoConquista> {
        const alimentoRepository = getRepository(TipoConquista);
        const ficha = await alimentoRepository.findOne({ where: { id } });

        return ficha;
    }

    async update(data: TipoConquista): Promise<void> {
        const alimentoRepository = getRepository(TipoConquista);

        const { id } = data

        await alimentoRepository.update({ id }, data)
    }

    async getAll(): Promise<TipoConquista[]> {
        const alimentoRepository = getRepository(TipoConquista);
        const ficha = await alimentoRepository.find()
        return ficha;
    }

}