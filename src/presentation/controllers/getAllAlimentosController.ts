import { FichaMetabolicaUseCase } from "../../domain/useCases/fichaMetabolicaUseCase";
import { GetAlimentosByIDUseCase } from "../../domain/useCases/getAlimentosByIDUseCase";
import { GetAllAlimentosUseCase } from "../../domain/useCases/getAllAlimentosUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllAlimentosController implements Controller {
    constructor(private readonly getAllAlimentosUseCase: GetAllAlimentosUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const alimentos = await this.getAllAlimentosUseCase.getAll()

            if (alimentos instanceof NotFoundError || alimentos instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(alimentos)

        } catch (error) {
            return serverError()
        }
    }
}