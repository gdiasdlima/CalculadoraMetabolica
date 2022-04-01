import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/authMiddlewareFactory'

export const auth = adaptMiddleware(makeAuthMiddleware())
