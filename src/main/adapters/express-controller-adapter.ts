import { Controller } from '../../presentation/contracts/controller'
import { HttpRequest } from '../../presentation/contracts/http'
import { Request, Response } from 'express'

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      file: req.file
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode !== 200 && httpResponse.statusCode !== 201) {
      res.status(httpResponse.statusCode).json({ message: httpResponse.body?.message })
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
