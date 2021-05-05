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
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa } = httpRequest.body

            const login = await this.fichaMetabolicaUseCase.calculate( idPessoa )

            if (login instanceof NotFoundError || login instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(login)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}