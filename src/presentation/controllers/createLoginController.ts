import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { CreateLoginUseCase } from '../../domain/useCases/createLoginUseCase';
import { Validator } from '../../validation/validator';

export class CreateLoginController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly createLoginUseCase: CreateLoginUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }
            const { nome, senha, email, telefone } = httpRequest.body

            const login = await this.createLoginUseCase.create(
                {
                    nome,
                    senha,
                    email,
                    telefone
                }
            )

            return success(login)
        }
        catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}