export class NotFoundError extends Error {
    constructor (field: string) {
      super(`Ops... esse ${field} não foi encontrado.`)
    }
  }
  