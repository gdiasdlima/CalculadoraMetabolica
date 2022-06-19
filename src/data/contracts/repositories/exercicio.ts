import { Exercicio } from "../../entities/exercicio";

export interface IExercicioRepository {
    create(data: Exercicio): Promise<Exercicio>
    find(data: Exercicio) : Promise<Exercicio>;
    findByID(data: number) : Promise<Exercicio>;
    getAllRefeicao(data: Exercicio) : Promise<Exercicio[]>;
    update(data: Exercicio): Promise<Exercicio>;
    delete(id: number): Promise<void>
}