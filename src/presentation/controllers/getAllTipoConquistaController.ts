import { GetAllTipoConquistaUseCase } from "../../domain/useCases/getAllTipoConquista";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllTipoConquistaController implements Controller {
    constructor(private readonly getAllTipoConquistaUseCase: GetAllTipoConquistaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const conquistas = await this.getAllTipoConquistaUseCase.getAll()

            if (conquistas instanceof NotFoundError || conquistas instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(conquistas)

        } catch (error) {
            return serverError()
        }
    }
}