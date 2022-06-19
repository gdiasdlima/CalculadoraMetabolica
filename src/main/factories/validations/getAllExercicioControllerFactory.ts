import { Validator } from "../../../validation/validator"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeGetAllExercicioValidator = (): ValidatorComposite => {
    const validations: Validator[] = [new RequiredFieldValidator('idPessoa')]
    return new ValidatorComposite(validations)
}