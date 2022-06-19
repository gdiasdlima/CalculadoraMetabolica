import { ExercicioModel } from "../../domain/models/exercicioModel";
import { GetExercicioUseCase } from "../../domain/useCases/getExercicioUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IExercicioRepository } from "../contracts/repositories/exercicio";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { ITipoExercicioRepository } from "../contracts/repositories/Tipoexercicio";
import { Exercicio } from "../entities/exercicio";
import { Pessoa } from "../entities/pessoa";
import { TipoExercicio } from "../entities/tipoExercicio";

export class GetExercicioService implements GetExercicioUseCase {

    constructor(
        private readonly exercicioRepository: IExercicioRepository,
        private readonly pessoaRepository: IPessoaRepository,
        private readonly tipoExercicioRepository: ITipoExercicioRepository

    ) { }

    async get(data: ExercicioModel): Promise<any> {

        const alreadyExist = await this.exercicioRepository.findByID(data.id);
        if (!alreadyExist) {
            return new NotFoundError('Exercicio')
        }

        const pessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!pessoa) {
            return new NotFoundError('Pessoa')
        }

        const tipoExercicio = await this.tipoExercicioRepository.findByID(data.idTipoExercicio);
        if (!tipoExercicio) {
            return new NotFoundError('Tipo Exercicio')
        }

        const exercicio = new Exercicio()
        exercicio.pessoa = new Pessoa()
        exercicio.tipoExercicio = new TipoExercicio()
        exercicio.tipoExercicio.id = data.idTipoExercicio
        exercicio.pessoa.id = data.idPessoa
        exercicio.data_exercicio = data.dataExercicio
        const reponse = await this.exercicioRepository.find(exercicio)
        return reponse
    }

}