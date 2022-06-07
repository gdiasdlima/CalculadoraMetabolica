import { Alimento } from "../../entities/alimento";

export interface IAlimentoRepository {
    create(data: Alimento): Promise<Alimento>
    findByID(id: number) : Promise<Alimento>;
    update(data: Alimento): Promise<void>;
    getAll(): Promise<Alimento[]>
}