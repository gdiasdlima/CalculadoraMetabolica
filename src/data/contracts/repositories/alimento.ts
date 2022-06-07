import { Alimento } from "../../entities/alimento";
import { FichaMetabolica } from "../../entities/fichaMetabolica";

export interface IAlimentoRepository {
    create(data: Alimento): Promise<Alimento>
    findByID(id: number) : Promise<Alimento>;
    update(data: Alimento): Promise<void>;
    getAll(): Promise<Alimento[]>
}