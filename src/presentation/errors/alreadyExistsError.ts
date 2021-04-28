export class AlreadyExistsError extends Error {
    constructor (field: string) {
      super(`Ops... parece que você já cadastrou esse ${field}`)
    }
  }
  