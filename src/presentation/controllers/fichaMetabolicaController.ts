import { FichaMetabolicaUseCase } from "../../domain/useCases/fichaMetabolicaUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class FichaMetabolicaController implements Controller {
    constructor(private readonly validator: Validator, private readonly fichaMetabolicaUseCase: FichaMetabolicaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa } = httpRequest.query

            const ficha = await this.fichaMetabolicaUseCase.calculate( idPessoa )

            if (ficha instanceof NotFoundError || ficha instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(ficha)

        } catch (error) {
            return serverError()
        }
    }
}