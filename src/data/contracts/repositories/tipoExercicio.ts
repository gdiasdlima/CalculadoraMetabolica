import { TipoExercicio } from "../../entities/tipoExercicio";

export interface ITipoExercicioRepository {
    create(data: TipoExercicio): Promise<TipoExercicio>
    findByID(id: number) : Promise<TipoExercicio>;
    getAll() : Promise<TipoExercicio[]>;
}