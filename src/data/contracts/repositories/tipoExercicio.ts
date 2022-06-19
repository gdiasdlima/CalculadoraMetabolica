import { TipoExercicio } from "../../entities/exercicio";

export interface ITipoExercicioRepository {
    create(data: TipoExercicio): Promise<TipoExercicio>
    findByID(data: TipoExercicio) : Promise<TipoExercicio>;
    getAll() : Promise<TipoExercicio[]>;
}