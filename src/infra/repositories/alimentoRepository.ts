import { getRepository } from "typeorm";
import { IAlimentoRepository } from "../../data/contracts/repositories/alimento";
import { Alimento } from "../../data/entities/alimento";
import { FichaMetabolica } from "../../data/entities/fichaMetabolica";

export class AlimentoRepository implements IAlimentoRepository {


    async create(data: Alimento): Promise<Alimento> {
        const alimentoRepository = getRepository(Alimento)

        return await alimentoRepository.save(data)
    }

    async findByID(id: number): Promise<Alimento> {
        const alimentoRepository = getRepository(Alimento);
        const ficha = await alimentoRepository.findOne({ where: { id } });

        return ficha;
    }

    async update(data: Alimento): Promise<void> {
        const alimentoRepository = getRepository(Alimento);

        const { id } = data

        await alimentoRepository.update({ id }, data)
    }
}