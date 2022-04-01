export class UnauthorizedTokenError extends Error {
  constructor () {
    super('Token expirado')
  }
}
