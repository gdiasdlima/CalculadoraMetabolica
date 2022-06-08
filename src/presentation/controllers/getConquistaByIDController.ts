import { GetConquistaByIDUseCase } from "../../domain/useCases/getConquistaByIDUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetConquistaByIDController implements Controller {
    constructor(private readonly validator: Validator, private readonly getConquistaByIDUseCase: GetConquistaByIDUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.query

            const conquista = await this.getConquistaByIDUseCase.getByID( id )

            if (conquista instanceof NotFoundError || conquista instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(conquista)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}