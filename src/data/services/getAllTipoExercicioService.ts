import { GetAllTipoExercicioUseCase } from "../../domain/useCases/getAllTipoExercicioUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { ITipoExercicioRepository } from "../contracts/repositories/Tipoexercicio";

export class GetAllTipoExercicioService implements GetAllTipoExercicioUseCase {

    constructor(
        private readonly tipoExercicioRepository: ITipoExercicioRepository
    ) { }

    async getAll(): Promise<any> {

        const exercicios = await this.tipoExercicioRepository.getAll()

        if (!exercicios) {
            throw new NotFoundError('Exercicio')
        }

        return exercicios
    }

}