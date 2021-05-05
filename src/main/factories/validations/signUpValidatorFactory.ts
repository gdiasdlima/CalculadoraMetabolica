import { Validator } from "../../../validation/validator"
import { CPFValidator } from "../../../validation/validator/cpf"
import { EmailValidator } from "../../../validation/validator/email"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeSignUpValidator = (): ValidatorComposite => {
    const validations: Validator[] = []

    const requiredFields = ['email', 'senha', 'nome', 'cpf', 'dataNascimento', 'peso', 'altura', 'telefone', 'sexo', 'atividadeFisica', 'objetivo', 'litrosAgua']
    for (const field of requiredFields) {
        validations.push(new RequiredFieldValidator(field))
    }
    
    validations.push(new EmailValidator('email'))
    validations.push(new CPFValidator('cpf'))

    return new ValidatorComposite(validations)
}