import { AuthenticationService } from '../../../data/services/authentication'
import { JsonWebTokenProvider } from '../../../infra/providers/jsonWebTokenProvider'
import { AuthMiddleware } from '../../../presentation/middlewares/auth'

export const makeAuthMiddleware = (): AuthMiddleware => {
  const jsonWebTokenProvider = new JsonWebTokenProvider()
  const authenticationService = new AuthenticationService(jsonWebTokenProvider)
  return new AuthMiddleware(authenticationService)
}
