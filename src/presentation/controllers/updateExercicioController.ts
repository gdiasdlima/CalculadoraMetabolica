import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { UpdateExercicioUseCase } from '../../domain/useCases/updateExercicioUseCase';

export class UpdateExercicioController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly updateRefeicaoUseCase: UpdateExercicioUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { idPessoa, dataExercicio, id, idTipoExercicio, kcalGastas, tempo } = httpRequest.body

            const exercicio = await this.updateRefeicaoUseCase.update({ idPessoa, dataExercicio, id, idTipoExercicio, kcalGastas, tempo })

            return success(exercicio)
        }

        catch (error) {
            console.log(error)
            return serverError()
        }
    }
}