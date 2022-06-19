import { TipoExercicio } from "../../entities/exercicio";

export interface ITipoExercicioRepository {
    create(data: TipoExercicio): Promise<TipoExercicio>
    findByID(id: number) : Promise<TipoExercicio>;
    getAll() : Promise<TipoExercicio[]>;
}