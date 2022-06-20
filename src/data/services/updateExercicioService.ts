import { ExercicioModel } from "../../domain/models/exercicioModel";
import { UpdateExercicioUseCase } from "../../domain/useCases/updateExercicioUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { IExercicioRepository } from "../contracts/repositories/exercicio";
import { IPessoaRepository } from "../contracts/repositories/pessoa";
import { ITipoExercicioRepository } from "../contracts/repositories/Tipoexercicio";
import { Exercicio } from "../entities/exercicio";
import { Pessoa } from "../entities/pessoa";
import { TipoExercicio } from "../entities/tipoExercicio";

export class UpdateExercicioService implements UpdateExercicioUseCase {

    constructor(
        private readonly pessoaRepository: IPessoaRepository,
        private readonly exercicioRepository: IExercicioRepository,
        private readonly TipoExercicioRepository: ITipoExercicioRepository,

    ) { }

    async update(data: ExercicioModel): Promise<any> {
        console.log('alooooooooooooooo')

        console.log(data)
        const alreadyExist = await this.exercicioRepository.findByID(data.id);
        if (!alreadyExist) {
            return new NotFoundError('Exercicio');
        }

        const Alreadypessoa = await this.pessoaRepository.findByID(data.idPessoa);
        if (!Alreadypessoa) {
            return new NotFoundError('Pessoa');
        }

        const alreadyExistTipo = await this.TipoExercicioRepository.findByID(data.idTipoExercicio);
        if (!alreadyExistTipo) {
            return new NotFoundError('Tipo Exercicio');
        }
      
        const exercicio = new Exercicio()
        exercicio.pessoa = new Pessoa()
        exercicio.tipoExercicio = new TipoExercicio()
        exercicio.id = data.id
        exercicio.pessoa.id = data.idPessoa
        exercicio.tipoExercicio.id = data.idTipoExercicio
        exercicio.kcal_gastas = data.kcalGastas ? data.kcalGastas : alreadyExist.kcal_gastas
        exercicio.tempo = data.tempo ? data.tempo : alreadyExist.tempo
       
        console.log(exercicio)
        const response = await this.exercicioRepository.update(exercicio)

        return response
    }
}