import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http';
import { badRequest, success, serverError } from '../contracts/httpHelper'
import { Validator } from '../../validation/validator';
import { SignUpUseCase } from '../../domain/useCases/createLoginUseCase';

export class SignUpController implements Controller {
    constructor(
        private readonly validator: Validator,
        private readonly signUpUseCase: SignUpUseCase
    ) {

    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }
            const { nome, senha, email, telefone, cpf, data_nascimento, peso } = httpRequest.body

            const login = await this.signUpUseCase.create(
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