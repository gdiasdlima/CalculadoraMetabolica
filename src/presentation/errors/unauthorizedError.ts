export class UnauthorizedError extends Error {
    constructor () {
      super('Credenciais inválidas, tente novamente!')
    }
  }
  