import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { UpdatePessoaUseCase } from '../../domain/useCases/updatePessoaUseCase';

export class UpdatePessoaController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly updatePessoaUseCase: UpdatePessoaUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { nome, idPessoa, pesoAtual, dataNascimento, sexo, objetivo, pesoObj } = httpRequest.body

           
            const pessoa = await this.updatePessoaUseCase.update(
                {
                    idPessoa,
                    nome,
                    dataNascimento,
                    pesoAtual,
                    sexo,
                    objetivo,
                    pesoObj
                }
            )

            return success(pessoa)
        }
        catch (error) {
            return serverError()
        }
    }
}