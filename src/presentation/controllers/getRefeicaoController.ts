import { GetFichaMetabolicaUseCase } from "../../domain/useCases/getMetabolicaUseCase";
import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetRefeicaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly getRefeicaoUseCase: GetRefeicaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa, idTipoRefeicao, dataRefeicao } = httpRequest.query

            const refeicao = await this.getRefeicaoUseCase.get({ idPessoa,
                idTipoRefeicao,
                dataRefeicao
                })

            if (refeicao instanceof NotFoundError || refeicao instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(refeicao)

        } catch (error) {
            return serverError()
        }
    }
}