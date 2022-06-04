import { getRepository } from "typeorm";
import { IFichaMetabolicaRepository } from "../../data/contracts/repositories/fichaMetabolica";
import { FichaMetabolica } from "../../data/entities/fichaMetabolica";

export class FichaMetabolicaRepository implements IFichaMetabolicaRepository {


    async create(data: FichaMetabolica): Promise<FichaMetabolica> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica)

        return await fichaMetabolicaRepository.save(data)
    }

    async findByIDPessoa(id_pessoa: number): Promise<FichaMetabolica> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica);
        const ficha = await fichaMetabolicaRepository.findOne({ where: { pessoa: {id : id_pessoa} } });

        return ficha;
    }

    async update(data: FichaMetabolica): Promise<void> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica);

        const { id } = data

        await fichaMetabolicaRepository.update({ id }, data)
    }
}