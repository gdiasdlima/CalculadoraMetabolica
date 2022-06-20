import { ExercicioModel } from "../../domain/models/exercicioModel";
import { CreateExercicioUseCase } from "../../domain/useCases/createExercicioUseCase";
import { ExercicioRepository } from "../../infra/repositories/exercicioRepository";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { ITipoExercicioRepository } from "../contracts/repositories/Tipoexercicio";
import { Exercicio } from "../entities/exercicio";
import { Pessoa } from "../entities/pessoa";
import { TipoExercicio } from "../entities/tipoExercicio";

export class CreateExercicioService implements CreateExercicioUseCase {

    constructor(
        private readonly exercicioRepository: ExercicioRepository,
        private readonly pessoaRepository: IPessoaRepository,
        private readonly tipoExercicioRepository: ITipoExercicioRepository,

    ) { }

    async create(data: ExercicioModel): Promise<any> {
        
        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('pessoa')
        }

        const Tipoexercicio = await this.tipoExercicioRepository.findByID(data.idTipoExercicio);
        if (!Tipoexercicio) {
            return new NotFoundError('Tipo Exercicio')
        }

        const exercicio = new Exercicio()
        exercicio.pessoa = new Pessoa()
        exercicio.tipoExercicio = new TipoExercicio()
        exercicio.pessoa.id = data.idPessoa
        exercicio.tipoExercicio.id = data.idTipoExercicio
        exercicio.kcal_gastas = data.kcalGastas
        exercicio.tempo = data.tempo
        exercicio.data_exercicio = new Date()
        const response = await this.exercicioRepository.create(exercicio)
        return response
    }

}