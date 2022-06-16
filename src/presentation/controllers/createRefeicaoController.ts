import { CreateRefeicaoUseCase } from "../../domain/useCases/createRefeicaoUseCase";
import { GetFichaMetabolicaUseCase } from "../../domain/useCases/getMetabolicaUseCase";
import { GetRefeicaoUseCase } from "../../domain/useCases/getRefeicaoUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class CreateRefeicaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly createRefeicaoUseCase: CreateRefeicaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const { idPessoa, idTipoRefeicao, carb, proteina, gordura, kcal } = httpRequest.body

            const refeicao = await this.createRefeicaoUseCase.create({ idPessoa,
                idTipoRefeicao,
                carb,
                proteina,
                gordura,
                kcal
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