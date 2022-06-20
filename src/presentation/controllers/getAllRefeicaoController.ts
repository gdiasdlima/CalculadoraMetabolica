import { GetAllRefeicaoUseCase } from "../../domain/useCases/getAllRefeicaoUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class GetAllRefeicaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly getAllRefeicaoUseCase: GetAllRefeicaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const error = this.validator.validate(httpRequest.query)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa, dataRefeicao } = httpRequest.query

            const refeicao = await this.getAllRefeicaoUseCase.getAll({ idPessoa, dataRefeicao})

            if (refeicao instanceof NotFoundError || refeicao instanceof UnauthorizedError) {
                return unauthorized()
            }
            return success(refeicao)

        } catch (error) {
            return serverError()
        }
    }
}