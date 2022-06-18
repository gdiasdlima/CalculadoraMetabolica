import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { DeleteRefeicaoUseCase } from '../../domain/useCases/deleteRefeicaoUseCase';

export class DeleteRefeicaoController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly updateRefeicaoUseCase: DeleteRefeicaoUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { idPessoa, idRefeicao, idTipoRefeicao, dataRefeicao } = httpRequest.body
           
            const refeicao = await this.updateRefeicaoUseCase.delete(
                {
                    idPessoa,
                    idRefeicao, 
                    idTipoRefeicao, 
                    dataRefeicao
                }
            )

            return success(refeicao)
        }
        catch (error) {
            console.log(error)
            return serverError()
        }
    }
}