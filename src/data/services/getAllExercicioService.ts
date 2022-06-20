import { ExercicioModel } from "../../domain/models/exercicioModel";
import { GetAllExercicioUseCase } from "../../domain/useCases/getAllExercicioUseCase";
import { ExercicioRepository } from "../../infra/repositories/exercicioRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { Exercicio } from "../entities/exercicio";
import { Pessoa } from "../entities/pessoa";

export class GetAllExercicioService implements GetAllExercicioUseCase {

    constructor(
        private readonly exercicioRepository: ExercicioRepository,
        private readonly pessoaRepository: IPessoaRepository,
    ) { }

    async getAll(data: ExercicioModel): Promise<any> {

        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('Pessoa')
        }
   
        const exercicio = new Exercicio()
        exercicio.pessoa = new Pessoa()
        exercicio.pessoa.id = data.idPessoa
        exercicio.data_exercicio = data.dataExercicio
        const response = await this.exercicioRepository.getAll(exercicio)
        return response

    }

}