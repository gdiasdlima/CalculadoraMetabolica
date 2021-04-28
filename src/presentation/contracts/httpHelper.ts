import { HttpResponse } from "./http"
import { ServerError } from "../errors/serverError"
import { UnauthorizedError } from "../errors/unauthorizedError"

export const badRequest = (error: any): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const serverError = (): HttpResponse => ({
    statusCode: 500,
    body: new ServerError()
})

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: new UnauthorizedError()
  })