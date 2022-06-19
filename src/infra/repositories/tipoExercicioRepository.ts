import { getRepository } from "typeorm";
import { ITipoExercicioRepository } from "../../data/contracts/repositories/Tipoexercicio";
import { TipoExercicio } from "../../data/entities/exercicio";

export class TipoExercicioRepository implements ITipoExercicioRepository {

    async create(data: TipoExercicio): Promise<TipoExercicio> {
        const tipoExercicioRepository = getRepository(TipoExercicio)
        return await tipoExercicioRepository.save(data)
    }

    async findByID(id: number): Promise<TipoExercicio> {
        const tipoExercicioRepository = getRepository(TipoExercicio);
        const tipoExercicio = await tipoExercicioRepository.findOne({ where: { id }});

        return tipoExercicio;
    }

    async getAll(): Promise<TipoExercicio[]> {
        const tipoExercicioRepository = getRepository(TipoExercicio);
        const tipoExercicio = await tipoExercicioRepository.find();
        return tipoExercicio;
    }
}