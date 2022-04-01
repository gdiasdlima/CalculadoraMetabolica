import { Middleware } from '../contracts/middleware'
import { HttpRequest, HttpResponse } from '../contracts/http'
import { UnauthorizedTokenError } from '../errors/unauthorizedTokenError'
import { AuthenticationUseCase } from '../../domain/useCases/authentication'
import { serverError, success, unauthorizedToken } from '../contracts/httpHelper'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly authenticationUseCase: AuthenticationUseCase
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { accessToken } = request.body
      if (!accessToken) {
        return unauthorizedToken()
      }
      const account = await this.authenticationUseCase.auth(accessToken)
      if (account instanceof UnauthorizedTokenError) {
        return unauthorizedToken()
      }
      const { id } = account
      return success({ id })
    } catch (error) {
      return serverError()
    }
  }
}
