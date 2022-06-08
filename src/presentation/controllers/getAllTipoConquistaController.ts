import { GetAllTipoConquista } from "../../data/services/getAllTipoConquista";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllAlimentosController implements Controller {
    constructor(private readonly getAllTipoConquista: GetAllTipoConquista) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const conquistas = await this.getAllTipoConquista.getAll()

            if (conquistas instanceof NotFoundError || conquistas instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(conquistas)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}