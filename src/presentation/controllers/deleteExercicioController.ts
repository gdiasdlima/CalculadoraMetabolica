import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { DeleteExercicioUseCase } from '../../domain/useCases/deleteExercicioUseCase';

export class DeleteExercicioController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly deleteExercicioUseCase: DeleteExercicioUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { id } = httpRequest.body
            const refeicao = await this.deleteExercicioUseCase.delete(id)

            return success(refeicao)
        }
        catch (error) {
            console.log(error)
            return serverError()
        }
    }
}