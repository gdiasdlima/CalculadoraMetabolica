import { Validator } from '../validator'
import validator from 'validator'
import { InvalidParamError } from '../../presentation/errors/invalidParamError'

export class EmailValidator implements Validator {
    constructor(private readonly field: string) { }

    validate(value: any): Error {
        const email = value[this.field]

        const isValid = email && validator.isEmail(email)
        if (!isValid) {
            return new InvalidParamError(this.field)
        }
    }
}
