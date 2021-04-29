import { cpf } from 'cpf-cnpj-validator'
import { InvalidParamError } from '../../presentation/errors/InvalidParamError'
import { Validator } from '../validator'


export class CPFValidator implements Validator {
  constructor (private readonly field: string) {}
  validate (value: any): Error {
    const cpfValue = value[this.field]

    const isValid = cpfValue && cpf.isValid(cpfValue)
    if (!isValid) {
      return new InvalidParamError(this.field)
    }
  }
}
