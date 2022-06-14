import { Validator } from "../../../validation/validator"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeGetRefeicaoValidator = (): ValidatorComposite => {
    const validations: Validator[] = []

    const requiredFields = ['idPessoa']
    for (const field of requiredFields) {
        validations.push(new RequiredFieldValidator(field))
    }
    return new ValidatorComposite(validations)
}