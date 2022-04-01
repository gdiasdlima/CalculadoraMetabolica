import { CalculoMetabolicoUseCase } from "../../domain/useCases/CalculoMetabolicoUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class CalculoMetabolicoController implements Controller {
    constructor(private readonly validator: Validator, private readonly calculoMetabolicoUseCase: CalculoMetabolicoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa } = httpRequest.body

            const calculo = await this.calculoMetabolicoUseCase.calculate( idPessoa )

            if (calculo instanceof NotFoundError || calculo instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(calculo)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}