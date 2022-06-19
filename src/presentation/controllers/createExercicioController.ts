import { CreateExercicioUseCase } from "../../domain/useCases/createExercicioUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class CreateExercicioController implements Controller {
    constructor(private readonly validator: Validator, private readonly createExercicioUseCase: CreateExercicioUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa, dataExercicio, id, idTipoExercicio, kcalGastas, tempo } = httpRequest.body

            const exercicio = await this.createExercicioUseCase.create({
                idPessoa,
                dataExercicio, id, idTipoExercicio, kcalGastas, tempo
            })

            if (exercicio instanceof NotFoundError || exercicio instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(exercicio)

        } catch (error) {
            return serverError()
        }
    }
}