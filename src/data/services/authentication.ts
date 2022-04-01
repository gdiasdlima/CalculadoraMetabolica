import { AuthenticationUseCase } from "../../domain/useCases/authentication"
import { UnauthorizedTokenError } from "../../presentation/errors/unauthorizedTokenError"
import { ITokenProvider } from "../contracts/providers/ITokenProvider"

export class AuthenticationService implements AuthenticationUseCase {
  constructor (
    private readonly tokenProvider: ITokenProvider
  ) { }

  async auth (accessToken: string): Promise<any> {
    const decoded = await this.tokenProvider.compare(accessToken)

    if (!decoded) {
      return new UnauthorizedTokenError()
    }
    return decoded
  }
}
