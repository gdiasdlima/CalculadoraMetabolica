import { Validator } from "../../../validation/validator"
import { RequiredFieldValidator } from "../../../validation/validator/requiredField"
import { ValidatorComposite } from "../../../validation/validator/validatorComposite"

export const makeGetConquistaByIDValidator = (): ValidatorComposite => {
    const validations: Validator[] = [new RequiredFieldValidator('id')]
    return new ValidatorComposite(validations)
}