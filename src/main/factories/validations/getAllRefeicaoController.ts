import { Validator } from "../../../validation/validator"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeGetAllRefeicaoValidator = (): ValidatorComposite => {
    const validations: Validator[] = []

    const requiredFields = ['idPessoa', 'dataRefeicao']
    for (const field of requiredFields) {
        validations.push(new RequiredFieldValidator(field))
    }

    return new ValidatorComposite(validations)
}