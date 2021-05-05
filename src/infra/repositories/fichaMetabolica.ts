import { getRepository } from "typeorm";
import { IFichaMetabolica } from "../../data/contracts/fichaMetabolica";
import { FichaMetabolica } from "../../data/entities/fichaMetabolica";

export class FichaMetabolicaRepository implements IFichaMetabolica {


    async create(data: FichaMetabolica): Promise<FichaMetabolica> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica)

        return await fichaMetabolicaRepository.save(data)
    }

    async findByIDPessoa(idPessoa: number): Promise<FichaMetabolica> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica);
        const ficha = await fichaMetabolicaRepository.findOne({ where: { idPessoa } });

        return ficha;
    }

    async update(data: FichaMetabolica): Promise<void> {
        const fichaMetabolicaRepository = getRepository(FichaMetabolica);

        const { id } = data

        await fichaMetabolicaRepository.update({ id }, data)
    }
}