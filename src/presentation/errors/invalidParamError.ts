export class InvalidParamError extends Error {
    constructor (field: string) {
      super(`${field} é um campo inválido.`)
    }
  }
  