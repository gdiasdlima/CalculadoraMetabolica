import { GetAllExercicioUseCase } from "../../domain/useCases/getAllExercicioUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllExercicioController implements Controller {
    constructor(private readonly validator: Validator, private readonly getAllExercicioUseCase: GetAllExercicioUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa, dataExercicio, id, idTipoExercicio, kcalGastas, tempo } = httpRequest.query

            const exercicio = await this.getAllExercicioUseCase.getAll({ idPessoa, dataExercicio, id, idTipoExercicio, kcalGastas, tempo })

            if (exercicio instanceof NotFoundError || exercicio instanceof UnauthorizedError) {
                return unauthorized()
            }
            return success(exercicio)

        } catch (error) {
            return serverError()
        }
    }
}