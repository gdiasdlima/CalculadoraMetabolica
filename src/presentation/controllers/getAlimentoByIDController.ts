import { FichaMetabolicaUseCase } from "../../domain/useCases/fichaMetabolicaUseCase";
import { GetAlimentosByIDUseCase } from "../../domain/useCases/getAlimentosByIDUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAlimentoByIDController implements Controller {
    constructor(private readonly validator: Validator, private readonly GetAlimentosByIDUseCase: GetAlimentosByIDUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.query

            const ficha = await this.GetAlimentosByIDUseCase.getByID( id )

            if (ficha instanceof NotFoundError || ficha instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(ficha)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}