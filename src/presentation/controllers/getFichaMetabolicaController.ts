import { FichaMetabolicaUseCase } from "../../domain/useCases/fichaMetabolicaUseCase";
import { GetFichaMetabolicaUseCase } from "../../domain/useCases/getMetabolicaUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetFichaMetabolicaController implements Controller {
    constructor(private readonly validator: Validator, private readonly getFichaMetabolicaUseCase: GetFichaMetabolicaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa } = httpRequest.query

            const ficha = await this.getFichaMetabolicaUseCase.getByID( idPessoa )

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