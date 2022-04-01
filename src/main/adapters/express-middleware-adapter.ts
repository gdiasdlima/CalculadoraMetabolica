import { Request, Response, NextFunction } from 'express'
import { Controller } from '../../presentation/contracts/controller'
import { HttpRequest } from '../../presentation/contracts/http'

export const adaptMiddleware = (middleware: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    const secretKey = req.headers['x-hub-signature']
    const [, accessToken] = authHeader ? authHeader.split('Bearer ') : ''

    const httpRequest: HttpRequest = {
      body: {
        accessToken,
        secretKey,
        data: secretKey ? req.body : null
      },
      file: req.file
    }

    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      if (!secretKey) {
        Object.assign(req.body, httpResponse.body)
      }
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
