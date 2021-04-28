import { Validator } from "../../../validation/validator"
import { EmailValidator } from "../../../validation/validator/email"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeSignInValidator = (): ValidatorComposite => {
    const validations: Validator[] = []

    const requiredFields = ['email', 'senha']
    for (const field of requiredFields) {
        validations.push(new RequiredFieldValidator(field))
    }
    
    validations.push(new EmailValidator('email'))

    return new ValidatorComposite(validations)
}