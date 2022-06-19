import { DeleteExercicioUseCase } from '../../domain/useCases/deleteExercicioUseCase'
import { NotFoundError } from '../../presentation/errors/notFoundError'
import { IExercicioRepository } from '../contracts/repositories/exercicio'

export class DeleteExercicioService implements DeleteExercicioUseCase {
    constructor(private readonly exercicioRepository: IExercicioRepository,
    ) { }
    async delete(id: number): Promise<void | Error> {
        const alreadyExist = await this.exercicioRepository.findByID(id)
        if (!alreadyExist) {
            return new NotFoundError('Exercicio')
        }
        
        await this.exercicioRepository.delete(id)
    }
}
