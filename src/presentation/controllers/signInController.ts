import { SignInUseCase } from "../../domain/useCases/signInUseCase";
import { Validator } from "../../validation/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, success, unauthorized  } from "../contracts/httpHelper";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/unauthorizedError";

export class SignInController implements Controller {
    constructor(private readonly validator: Validator, private readonly signInUseCase: SignInUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const { email, senha } = httpRequest.body

            const login = await this.signInUseCase.sign({ email, senha })

            if (login instanceof NotFoundError || login instanceof UnauthorizedError) {
                return unauthorized()
            }

            return success(login)

        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}