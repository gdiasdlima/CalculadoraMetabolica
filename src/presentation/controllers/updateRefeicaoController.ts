import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { UpdateRefeicaoUseCase } from '../../domain/useCases/updateRefeicaoUseCase';

export class UpdateRefeicaoController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly updateRefeicaoUseCase: UpdateRefeicaoUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { idPessoa, idRefeicao, idTipoRefeicao, dataRefeicao, kcal, carb, proteina, gordura, gramas} = httpRequest.body
           
            const refeicao = await this.updateRefeicaoUseCase.update(
                {
                    idPessoa,
                    idRefeicao, 
                    idTipoRefeicao, 
                    dataRefeicao, 
                    kcal, 
                    carb, 
                    proteina, 
                    gordura, 
                    gramas
                }
            )

            return success(refeicao)
        }
        catch (error) {
            return serverError()
        }
    }
}