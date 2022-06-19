import { getRepository } from "typeorm";
import { IExercicioRepository } from "../../data/contracts/repositories/exercicio";
import { Exercicio } from "../../data/entities/exercicio";

export class ExercicioRepository implements IExercicioRepository {


    async create(data: Exercicio): Promise<Exercicio> {
        const exercicioRepository = getRepository(Exercicio)
        return await exercicioRepository.save(data)
    }

    async find(data: Exercicio): Promise<Exercicio> {
        const exercicioRepository = getRepository(Exercicio);
        const exercicio = await exercicioRepository.findOne({ where: { pessoa: { id: data.pessoa.id }, tipoExercicio: { id: data.tipoExercicio.id }, data_exercicio: data.data_exercicio }, relations: ['tipoExercicio'] });
        return exercicio;
    }

    async findByID(id: number): Promise<Exercicio> {
        const exercicioRepository = getRepository(Exercicio);
        const exercicio = await exercicioRepository.findOne({ where: { id }, relations: ['tipoExercicio'] });
        return exercicio;
    }

    async getAll(data: Exercicio): Promise<Exercicio[]> {
        const exercicioRepository = getRepository(Exercicio);
        const exercicio = await exercicioRepository.find({ where: { pessoa: { id: data.pessoa.id }, tipoExercicio: { id: data.tipoExercicio.id }, data_exercicio: data.data_exercicio }, relations: ['tipoExercicio'] });
        return exercicio;
    }

    async update(data: Exercicio): Promise<Exercicio> {
        const exercicioRepository = getRepository(Exercicio);

        const { id } = data

        await exercicioRepository.update({ id }, data)

        const exercicio = await exercicioRepository.findOne({ where: { id }, relations: ['tipoExercicio'] });

        return exercicio
    }

    async delete(id: number): Promise<void> {
        const exercicioRepository = getRepository(Exercicio)
        await exercicioRepository.delete(id)
    }
}